<?php


function university_files() {
 
  wp_enqueue_script('main-university-js', get_theme_file_uri('/build/index.js'), array('jquery'), '1.0', true); wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
  wp_enqueue_style('university_main_styles', get_theme_file_uri('/build/style-index.css'));
  wp_enqueue_style('university_extra_styles', get_theme_file_uri('/build/index.css'));

  wp_localize_script('main-university-js', 'universityData', array(
    'root_url' => get_site_url(),
    'nonce' => wp_create_nonce('wp_rest')
  ));

}

add_action('wp_enqueue_scripts', 'university_files');

function university_features() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('editor-styles');
}

add_action('after_setup_theme', 'university_features');


class BannerBlock {
  function __construct() {
    add_action('init', array($this, 'bannerBlock'));
  }

  function bannerBlock() {
    wp_register_script('bannerBlockScript', get_stylesheet_directory_uri() . '/build/banner.js', array('wp-blocks', 'wp-editor'));
    register_block_type("ourblocktheme/banner", array(
      'editor_script' => 'bannerBlockScript',
      'render_callback' => array($this, 'theHTML')
    ));
  }

  function theHTML($attributes) {
    ob_start(); ?>
    <p>ValueOne<strong><?php echo esc_html($attributes['valueOne']) ?></strong> 
    <br>ValueTwo<strong><?php echo esc_html($attributes['valueTwo']) ?></strong></p>
    <?php return ob_get_clean();
  }
}

$bannerBlock = new BannerBlock();
