<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>" />
        <meta http-equiv="X-UA-Compatible" content="IE=10,chrome=1">

        <title><?php wp_title( '|' ); ?> | <?php bloginfo( 'name' ); ?></title>

        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

        <!-- Favicons -->
        <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />
        <!-- For third-generation iPad with high-resolution Retina display: -->
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="favicon-144x144.png">
        <!-- For iPhone with high-resolution Retina display: -->
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="favicon-114x114.png">
        <!-- For first- and second-generation iPad: -->
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="favicon-72x72.png">
        <!-- For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
        <link rel="apple-touch-icon-precomposed" href="favicon-72x72.png">

        <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/css/vendor.min.css" type="text/css" />
        <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/css/screen.css" type="text/css" />

        <?php wp_head(); ?>
    </head>
    <body>
    <div class="wrapper">
