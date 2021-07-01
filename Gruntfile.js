/** ────────────────────────────────────────────────────────────── *
 * Grunt build script.
 *
 * @description Task runner for node projects. Build  on `build`.
 * @version 1.0.0
 * @author xianmalik
 * @license NONE
 * @copyright Malik Zubayer Ul Haider, 2021
 * ────────────────────────────────────────────────────────────── **/

module.exports = function( grunt ) {
	'use strict';

	const script_version = '1.0.0';
	const path = require( 'path' );
	const sass = require( 'node-sass' );
	const webpack = require( 'webpack' );

	const config = {
		name: 'letterify',
		srcDir: './',
		distDir: '../dist/letterify/',
		ignoreLint: true,
	};

	// File lists lists
	const files = {
		scss: [
			{
				cwd: 'public/assets/scss/',
				src: [ '*.scss' ],
				dest: 'public/assets/css/',
			},
			{
				cwd: 'core/assets/scss/',
				src: [ '*.scss' ],
				dest: 'core/assets/css/',
			},
		],
		js: [
			{
				cwd: config.srcDir + 'src/public',
				src: [ 'app.js' ],
				dest: config.srcDir + 'public/assets/js/',
			},
			{
				cwd: config.srcDir + 'src/admin',
				src: [ 'app.js' ],
				dest: config.srcDir + 'core/assets/js/',
			},
		],
	};

	// Webpack Config
	const webpackConfig = {
		module: {
			rules: [ {
				test: /\.m?(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/i,
				use: [ 'style-loader', 'css-loader' ],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
				},
			} ],
		},
		performance: { hints: false },
		resolve: {
			fallback: { fs: false },
		},
		externals: {
			react: 'React',
			'react-dom': 'ReactDOM',
		},
		plugins: [
			new webpack.EnvironmentPlugin( {
				platform: 'win32',
			} ),
		],
	};

	// Grunt task begins
	grunt.initConfig( {

		// Watch for file changes and compile onChange
		watch: {
			css: {
				files: [ config.srcDir + '**/*.scss', '!' + config.srcDir + 'node_modules' ],
				tasks: [ 'css', ( config.ignoreLint ? 'log:nolintwarning' : 'stylelint' ) ],
			},
			js: {
				files: [ config.srcDir + '**/src/**/*.js', '!' + config.srcDir + 'node_modules' ],
				tasks: [ 'js', ( config.ignoreLint ? 'log:nolintwarning' : 'eslint' ) ],
			},
		},

		// Compile all .scss files from src to dest
		sass: {
			compile: {
				options: {
					indentWidth: 1,
					sourceMap: 'none',
					indentType: 'tab',
					omitSourceMapUrl: true,
					outputStyle: 'expanded',
					implementation: sass,
				},
				files: files.scss.map( value => ( {
					expand: true,
					extDot: 'last',
					ext: '.css',
					cwd: value.cwd,
					src: value.src,
					dest: value.dest,
				} ) ),
			},
		},

		// Autoprefixer.
		postcss: {
			options: {
				processors: [
					require( 'autoprefixer' ),
				],
			},
			dist: {
				files: files.scss.map( value => ( {
					src: [
						config.srcDir + value.dest + '*.css',
						'!' + config.srcDir + value.dest + '*.min.css',
					],
				} ) ),
			},
		},

		// Compile app.js files from src to dest
		webpack: {
			configs: files.js.flatMap( value =>
				value.src.map( val => ( {
					mode: 'production',
					entry: path.join( __dirname, config.srcDir, value.cwd, val ),
					output: {
						path: path.resolve( __dirname, config.srcDir, value.dest ),
						filename: val.replace( /^.*[\\\/]/, '' ),
					},
					optimization: {
						minimize: false,
					},
					...webpackConfig, // Additional webpack configuration
				} ),
				) ).flat( 1 ),
		},

		// i18n
		addtextdomain: {
			options: {
				// textdomain: 'foobar',
				updateDomains: true, // List of text domains to replace.
			},
			target: {
				src: [
					config.srcDir + '*.php',
					config.srcDir + '**/*.php',
					'!' + config.srcDir + 'node_modules/**',
					'!' + config.srcDir + 'dev-*/**',
				],
			},
		},

		checktextdomain: {
			standard: {
				options: {
					text_domain: config.name, //Specify allowed domain(s)
					// correct_domain: true, // don't use it, it has bugs
					keywords: [ //List keyword specifications
						'__:1,2d',
						'_e:1,2d',
						'_x:1,2c,3d',
						'esc_html__:1,2d',
						'esc_html_e:1,2d',
						'esc_html_x:1,2c,3d',
						'esc_attr__:1,2d',
						'esc_attr_e:1,2d',
						'esc_attr_x:1,2c,3d',
						'_ex:1,2c,3d',
						'_n:1,2,4d',
						'_nx:1,2,4c,5d',
						'_n_noop:1,2,3d',
						'_nx_noop:1,2,3c,4d',
					],
				},
				files: [ {
					src: [
						config.srcDir + '**/*.php',
						'!' + config.srcDir + 'node_modules/**',
					], //all php
					expand: true,
				} ],
			},
		},

		makepot: {
			target: {
				options: {
					cwd: config.srcDir, // Directory of files to internationalize.
					mainFile: '', // Main project file.
					type: 'wp-plugin', // Type of project (wp-plugin or wp-theme).
					updateTimestamp: false, // Whether the POT-Creation-Date should be updated without other changes.
					updatePoFiles: false, // Whether to update PO files in the same directory as the POT file.
				},
			},
		},

		// Deleting previous build files & .zip
		clean: {
			options: { force: true },
			dist: [
				config.distDir + '/**',
				config.distDir.replace( /\/$/, '' ) + '.zip',
			],
		},

		// Copying project files to ../dist/ directory
		copy: {
			dist: {
				files: [ {
					expand: true,
					src: [
						'' + config.srcDir + '**',
						'!' + config.srcDir + 'Gruntfile.js',
						'!' + config.srcDir + 'package.json',
						'!' + config.srcDir + 'package-lock.json',
						'!' + config.srcDir + 'node_modules/**',
						'!' + config.srcDir + '**/dev-*/**',
						'!' + config.srcDir + '**/*-test/**',
						'!' + config.srcDir + '**/*-beta/**',
						'!' + config.srcDir + '**/scss/**',
						'!' + config.srcDir + '**/sass/**',
						'!' + config.srcDir + '**/src/**',
						'!' + config.srcDir + '**/.*',
						'!' + config.srcDir + '**/*.config',
						'!' + config.srcDir + 'build-package/**',
						'!' + config.srcDir + 'none',
						'!' + config.srcDir + 'Built',
						'!' + config.srcDir + 'Installable',
					],
					dest: config.distDir,
				} ],
			},
		},

		// Compress Build Files into ${project}.zip
		compress: {
			dist: {
				options: {
					force: true,
					mode: 'zip',
					archive: config.distDir.replace( config.name, '' ) + config.name + '.zip',
				},
				expand: true,
				cwd: config.distDir,
				src: [ '**' ],
				dest: '../' + config.name,
			},
		},

		// Minify all .js files.
		terser: {
			options: {
				ie8: true,
				parse: {
					strict: false,
				},
			},
			js: {
				files: [ {
					expand: true,
					src: [ config.distDir + '**/*.js' ],
					dest: '',
				} ],
			},
		},

		// Minify all .css files.
		cssmin: {
			options: {
				force: true,
				compress: true,
				sourcemaps: false,
			},
			minify: {
				files: [ {
					expand: true,
					src: [ config.distDir + '**/*.css' ],
					dest: '',
				} ],
			},
		},

		// JavaScript linting with ESLint.
		eslint: {
			options: {
				fix: true,
			},
			default: [
				'' + config.srcDir + '/**/*.js',
				'!' + config.srcDir + '/**/*.min.js',
				'!' + config.srcDir + 'node_modules/**',
			],
		},

		// Sass linting with Stylelint.
		stylelint: {
			options: {
				fix: true,
				configFile: '.stylelintrc',
			},
			default: [ config.srcDir + '**/*.scss' ],
		},

		// All logging configuration
		log: {
			// before build starts log
			begin: `
╭─────────────────────────────────────────────────────────────────
│ » Project: ${config.name}
│ » Dist: ${config.distDir}
│ » Script Version: ${script_version}
╰─────────────────────────────────────────────────────────────────
			`.cyan,

			// before build starts log
			nolintwarning: '\n►'.red + ' Linting is not enabled for this project.',

			// before textdomain tasks starts log
			textdomainchecking: '\n►'.green + ` Checking textdomain [${config.name}].`,

			// before textdomain tasks starts log
			minifying: '\n►'.green + ' Minifying js & css files.',

			// After finishing all tasks
			finish: `
╭────────────────────────────────────────────────────────────────╮
│                                                                │
│                      All tasks completed.                      │
│   Built files & Installable zip copied to the dist directory   │
│                        ~ Xian Malik ~                          │
│                                                                │
╰────────────────────────────────────────────────────────────────╯
			`.yellow,
		},
	} );

	// Stopping Grunt header logs before every task
	grunt.log.header = function() { };

	// Load all Grunt library tasks
	require( 'jit-grunt' )( grunt, {
		postcss: 'grunt-postcss',
	} );

	// Loading modules that are not autoloaded by jit-grant
	grunt.loadNpmTasks( 'grunt-wp-i18n' ); // Load wp-i18n lib

	/* ---------------------------------------- *
	 *  Registering TASKS
	 * ---------------------------------------- */

	// Default tasks
	grunt.registerTask( 'default', [
		'log:begin',
		'js',
		'css',
		( config.ignoreLint ? 'log:nolintwarning' : 'lint' ),
		'watch',
	] );

	grunt.registerTask( 'js', [
		'webpack',
	] );

	grunt.registerTask( 'css', [
		'sass',
		'postcss',
	] );

	grunt.registerTask( 'minify', [
		'log:minifying',
		'terser:js',
		'cssmin',
	] );

	grunt.registerTask( 'boot', [
		'clean',
		'copy',
	] );

	grunt.registerTask( 'build', [
		'log:begin',
		( config.ignoreLint ? 'log:nolintwarning' : 'lint' ),
		'fixtextdomain',
		'makepot',
		'boot',
		'minify',
		'compress',
		'log:finish',
	] );

	grunt.registerTask( 'lint', [
		'eslint',
		'stylelint',
	] );

	grunt.registerTask( 'fixtextdomain', [
		'log:textdomainchecking',
		'addtextdomain',
		'checktextdomain',
	] );

	// Only an alias to 'default' task.
	grunt.registerTask( 'dev', [
		'default',
	] );

	// Logging multi task
	grunt.registerMultiTask( 'log', function() {
		grunt.log.writeln( this.data );
	} );
};
