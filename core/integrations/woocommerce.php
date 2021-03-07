<?php
if (class_exists('WC_Product_Data_Store_CPT')) {


    class Letterify_Product_Data_Store_CPT extends WC_Product_Data_Store_CPT
    {

        /**
         * Method to read a product from the database.
         * @param WC_Product
         */

        public function read(&$product)
        {

            $product->set_defaults();

            if (!$product->get_id() || !($post_object = get_post($product->get_id())) || !in_array($post_object->post_type, array('letterify-orders', 'product'))) { // change birds with your post type
                throw new Exception(__('Invalid product.', 'letterify'));
            }

            $id = $product->get_id();

            $product->set_props(array(
                'name'              => $post_object->post_title,
                'slug'              => $post_object->post_name,
                'date_created'      => 0 < $post_object->post_date_gmt ? wc_string_to_timestamp($post_object->post_date_gmt) : null,
                'date_modified'     => 0 < $post_object->post_modified_gmt ? wc_string_to_timestamp($post_object->post_modified_gmt) : null,
                'status'            => $post_object->post_status,
                'description'       => $post_object->post_content,
                'short_description' => $post_object->post_excerpt,
                'parent_id'         => $post_object->post_parent,
                'menu_order'        => $post_object->menu_order,
                'reviews_allowed'   => 'open' === $post_object->comment_status,
            ));

            $this->read_attributes($product);
            $this->read_downloads($product);
            $this->read_visibility($product);
            $this->read_product_data($product);
            $this->read_extra_data($product);
            $product->set_object_read(true);
        }

        /**
         * Get the product type based on product ID.
         *
         * @since 3.0.0
         * @param int $product_id
         * @return bool|string
         */
        public function get_product_type($product_id)
        {
            $post_type = get_post_type($product_id);
            if ('product_variation' === $post_type) {
                return 'variation';
            } elseif (in_array($post_type, array('letterify-orders', 'product'))) { // change birds with your post type
                $terms = get_the_terms($product_id, 'product_type');
                return !empty($terms) ? sanitize_title(current($terms)->name) : 'simple';
            } else {
                return false;
            }
        }
    }



    function letterify_woocommerce_data_stores($stores)
    {
        $stores['product'] = 'Letterify_Product_Data_Store_CPT';
        return $stores;
    }

    function woo_checkout_callback($order_id)
    {

        $entry_id = get_option('letterify_last_entry_id');
        update_post_meta($entry_id, 'letterify_woo_order_id', $order_id);
    }

    function letterify_woo_nonce_check()
    {
        if (in_array('woocommerce/woocommerce.php', apply_filters('active_plugins', get_option('active_plugins')))) {
            if (!is_user_logged_in()) {

                add_filter('nonce_user_logged_out', function ($uid, $action = -1) {
                    if ($action === 'wp_rest') {

                        return get_current_user_id();
                    }
                    return $uid;
                }, 99, 2);
            }
        }
    }

    add_filter('woocommerce_data_stores', 'letterify_woocommerce_data_stores');
    add_action('woocommerce_thankyou', 'woo_checkout_callback', 10, 1);

    add_action('init', 'letterify_woo_nonce_check');
}
