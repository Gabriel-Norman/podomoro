<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package podomoro
 */

?>
	<footer id="ftr" class="site-footer">
		<div class="footer__content">
			<?php dynamic_sidebar( 'footer-area' ); ?>
		</div>
		<div class="copyright">
			<span class="sep"> | </span>
				<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'podo' ), 'podo', '<a href="https://gnrm.se/">Gabriel Norman</a>' );
				?>
		</div><!-- .site-info -->
	</footer><!-- #ftr -->
</div><!-- #page -->

<?php
	if ( is_active_sidebar( 'cookie-banner-area' ) ) :
		get_template_part( 'components/cookie', 'banner' );
	endif;
?>

<?php wp_footer(); ?>

</body>
</html>
