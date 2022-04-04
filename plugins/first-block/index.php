<?php

/*
  Plugin Name: First Block
  Description: A test plugin block
  Version: 1.0
  Author: Craig
  Author URI: https://wpjs.co.uk
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class firstBlock {
  function __construct() {
    add_action('init', array($this, 'adminAssets'));
  }

  function adminAssets() {
    wp_register_script('ournewblocktype', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));
    register_block_type('ourblocktheme/first-block', array(
      'editor_script' => 'ournewblocktype',
      'render_callback' => array($this, 'theHTML')
    ));
  }

  function theHTML($attributes) {
    ob_start(); ?>
    <h3>Value One: <?php echo esc_html($attributes['valueOne']) ?><br>
     Value Two: <?php echo esc_html($attributes['valueTwo']) ?></h3>
    <?php return ob_get_clean();
  }
}

$firstBlock = new FirstBlock();