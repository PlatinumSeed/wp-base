<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-header' ) ); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<?php endwhile; endif; ?>

<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-footer' ) ); ?>
