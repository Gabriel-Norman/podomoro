<?php
/**
 * Disable useless stuff
 *
 * @package podomoro
 */

// Disable Gutenberg from BE
add_filter('use_block_editor_for_post', '__return_false');
add_filter( 'use_widgets_block_editor', '__return_false' );
 
// Disable Gutenberg Block Library CSS from loading on the frontend
function smartwp_remove_wp_block_library_css(){
  wp_dequeue_style( 'wp-block-library' );
  wp_dequeue_style( 'wp-block-library-theme' );
  wp_dequeue_style( 'wc-block-style' ); // Remove WooCommerce block CSS
 }
 add_action( 'wp_enqueue_scripts', 'smartwp_remove_wp_block_library_css', 100 );
 
 // Disable the emoji's
 function disable_emojis() {
   remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
   remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
   remove_action( 'wp_print_styles', 'print_emoji_styles' );
   remove_action( 'admin_print_styles', 'print_emoji_styles' );
   remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
   remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
   remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
   add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
 }
 add_action( 'init', 'disable_emojis' );
 
 // Disable the wp-embed.min.js
 function my_deregister_scripts(){
  wp_dequeue_script( 'wp-embed' );
 }
 add_action( 'wp_footer', 'my_deregister_scripts' );

 // Disable WP 5.9 global style and SVGs
 remove_action( 'wp_enqueue_scripts', 'wp_enqueue_global_styles' );
 remove_action( 'wp_body_open', 'wp_global_styles_render_svg_filters' );
 
  // Cleanup head
  remove_action('wp_head', 'wp_oembed_add_discovery_links', 10);
  remove_action('template_redirect', 'rest_output_link_header', 11, 0);
  remove_action( 'wp_head', 'feed_links_extra', 3 );
  remove_action( 'wp_head', 'feed_links', 2 );
  remove_action ('wp_head', 'rsd_link');
  remove_action( 'wp_head', 'wlwmanifest_link');
  remove_action( 'wp_head', 'wp_shortlink_wp_head');
  remove_action( 'wp_head', 'wp_generator' );

 /**
  * Filter function used to remove the tinymce emoji plugin.
  *
  * @param    array  $plugins
  * @return   array             Difference betwen the two arrays
  */
 function disable_emojis_tinymce( $plugins ) {
   if ( is_array( $plugins ) ) {
     return array_diff( $plugins, array( 'wpemoji' ) );
   } else {
     return array();
   }
 }