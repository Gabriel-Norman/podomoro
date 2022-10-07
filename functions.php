<?php
/**
 * podo functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package podomoro
 */

if ( ! defined( 'PODO_V' ) ) {
	// Replace the version number of the theme on each release.
	define( 'PODO_V', '1.0.0' );
}

// ENQUEUE SCRIPTS MODULES AND STYLES
define('IS_VITE_DEVELOPMENT', true);

include "inc/vite.php";

// INITIAL SETUP
require_once('inc/initial-setup.php');

// DISABLE USELESS STUFF
require_once('inc/disable-stuff.php');

// FILE TYPE MIMES
require_once('inc/file-type-mimes.php');

// FOOTER AREA
function footer_widgets_init() {
	register_sidebar( array(
			'name'          => 'Footer Area',
			'id'            => 'footer-area',
			'before_widget' => '<div class="footer__column">',
			'after_widget'  => '</div>',
			'before_title'  => '',
			'after_title'   => '',
	) );
}
add_action( 'widgets_init', 'footer_widgets_init' );

// COOKIE BANNER AREA
function cookie_widgets_init() {
    register_sidebar( array(
        'name'          => 'Cookie banner Area',
        'id'            => 'cookie-banner-area',
		'description' 	=> 'Inserire un blocco di testo senza utilizzare il titolo  -  (Es. Per offrirti la miglior esperienza possibile, questo sito utilizza i cookie. Informativa)',
        'before_widget' => '',
        'after_widget'  => '',
        'before_title'  => '',
        'after_title'   => '',
    ) );
}
add_action( 'widgets_init', 'cookie_widgets_init' );

// function podo_scripts() {
// 	// wp_enqueue_script('jquery', 'http://code.jquery.com/jquery-latest.min.js', array(), false, true);

// 	wp_enqueue_style( 'podo-style', get_template_directory_uri() . '/dist/css/style.css', array(), PODO_V );
// 	wp_enqueue_script( 'podo-js', get_template_directory_uri() . '/dist/js/bundle.min.js', array(), PODO_V, true );

// 	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
// 		wp_enqueue_script( 'comment-reply' );
// 	}
// }
// add_action( 'wp_enqueue_scripts', 'podo_scripts' );

// Implement the Custom Header feature.
require get_template_directory() . '/inc/custom-header.php';

// Custom template tags for this theme.
require get_template_directory() . '/inc/template-tags.php';

// Functions which enhance the theme by hooking into WordPress.
require get_template_directory() . '/inc/template-functions.php';

// Customizer additions.
require get_template_directory() . '/inc/customizer.php';

// Load WooCommerce compatibility file.
// if ( class_exists( 'WooCommerce' ) ) {
// 	require get_template_directory() . '/inc/woocommerce.php';
// }


/* INIZIO FUNCTION CUSTOM */

// ACF Options Page

// if( function_exists('acf_add_options_page') ) {
// 	acf_add_options_page(array(
// 		'page_title' 	=> 'Impostazioni Generali',
// 		'menu_title'	=> 'Impostazioni Generali',
// 		'menu_slug' 	=> 'theme-general-settings',
// 		'capability'	=> 'edit_posts',
// 		'redirect'		=> false
// 	));
// 	acf_add_options_sub_page(array(
// 		'page_title' 	=> '',
// 		'menu_title'	=> '',
// 		'parent_slug'	=> 'theme-general-settings',
// 	));
// }