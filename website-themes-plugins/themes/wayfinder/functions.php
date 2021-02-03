<?php
function remove_menus(){

  remove_menu_page( 'index.php' );                  //Dashboard
  remove_menu_page( 'edit.php' );                   //Posts
}
add_action( 'admin_menu', 'remove_menus' );

/**
 * Enqueue scripts and styles.
 */
function wayfinder_scripts() {
	wp_enqueue_script( 'wayfinder-main', get_theme_file_uri( '/js/scripts.js' ), array( 'jquery' ), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'wayfinder_scripts' );

/**
  * Multi-column row shortcode - can have as many columns as needed
*/

function wayfinder_multi_column($atts = [], $content = null, $tag = '') {
  // normalize attribute keys, lowercase
  $atts = array_change_key_case((array)$atts, CASE_LOWER);

  // override default attributes with user attributes
  $wf_atts = shortcode_atts([
    'classnames' => '',
  ], $atts, $tag);

  // start output
  $o = '';

  // start row
  $o .= '<div class="row ' . esc_html($wf_atts['classnames']) . '">';

  // enclosing tags
  if (!is_null($content)) {
    // secure output by executing the_content filter hook on $content
    $o .= apply_filters('the_content', $content);

    // run shortcode parser recursively
    $o .= do_shortcode($content);
  }

  // end row
  $o .= '</div>';

  // return output
  return $o;
}

/**
  * Column shortcode - can have any BS col classes needed
*/

function wayfinder_column($atts = [], $content = null, $tag = '') {
  // normalize attribute keys, lowercase
  $atts = array_change_key_case((array)$atts, CASE_LOWER);

  // override default attributes with user attributes
  $wf_atts = shortcode_atts([
    'classnames' => 'col-xs-12 col-sm-6 col-md-4',
  ], $atts, $tag);

  // start output
  $o = '';

  // start row
  $o .= '<div class="' . esc_html($wf_atts['classnames']) . '">';

  // enclosing tags
  if (!is_null($content)) {
    // secure output by executing the_content filter hook on $content
    $o .= apply_filters('the_content', $content);

    // run shortcode parser recursively
    $o .= do_shortcode($content);
  }

  // end row
  $o .= '</div>';

  // return output
  return $o;
}

/**
  * Figure shortcode - can have as many figures as needed
*/

function wayfinder_figure_grid($atts = [], $content = null, $tag = '') {
  // normalize attribute keys, lowercase
  $atts = array_change_key_case((array)$atts, CASE_LOWER);

  // override default attributes with user attributes
  $wf_atts = shortcode_atts([
    'classnames' => '',
  ], $atts, $tag);

  // start output
  $o = '';

  // start row
  $o .= '<div class="row figure-grid ' . esc_html($wf_atts['classnames']) . '">';

  // enclosing tags
  if (!is_null($content)) {
    // secure output by executing the_content filter hook on $content
    $o .= apply_filters('the_content', $content);

    // run shortcode parser recursively
    $o .= do_shortcode($content);
  }

  // end row
  $o .= '</div>';

  // return output
  return $o;
}

/**
  * Figure shortcode - image can be large and/or aligned right
*/

function wayfinder_figure($atts = [], $content = null, $tag = '') {
  // normalize attribute keys, lowercase
  $atts = array_change_key_case((array)$atts, CASE_LOWER);

  // override default attributes with user attributes
  $wf_atts = shortcode_atts([
     'alignment' => '',
     'large' => 'false',
     'image' => '',
     'title' => 'Caption Title'
  ], $atts, $tag);

  // setup default column classes
  $leftcolclass = '';
  $rightcolclass = '';

  // setup column classes based on user input for alignment
  if ($wf_atts['alignment'] === 'right') {
    // if right-aligned, reverse column order and align text right
    $leftcolclass = 'col-xs-12 col-sm-6 col-sm-push-6';
    $rightcolclass = 'col-xs-12 col-sm-6 col-sm-pull-6 text-right';
  } else {
    // keep column order, align image right
    $leftcolclass = 'col-xs-12 col-sm-6 text-right';
    $rightcolclass = 'col-xs-12 col-sm-6';
  }

  // add large class based on whether large is selected or not
  if ($wf_atts['large'] === 'true') {
    $leftcolclass .= ' large';
  }

  // start output
  $o = '';

  // start figure
  $o .= '<div class="' . $leftcolclass . '">';

  // image
  $o .= '<img src="' . esc_html($wf_atts['image']) . '" alt="' . esc_html__($wf_atts['title'], 'wf') . '" />';

  // end figure
  $o .= '</div>';

  // start title & caption col
  $o .= '<div class="' . $rightcolclass . '">';

  // enclosing tags
  if (!is_null($content)) {
    // secure output by executing the_content filter hook on $content
    $o .= apply_filters('the_content', $content);

    // run shortcode parser recursively
    $o .= do_shortcode($content);
  }

  // end title and caption
  $o .= '</div>';

  // return output
  return $o;
}

/**
  * Carousel shortcode - can have as many images as needed
*/

function wayfinder_carousel($content = null, $tag = '') {
  // start output
  $o = '';

  // start carousel
  $o .= '<div class="carousel">';

  // enclosing tags
  if (!is_null($content)) {
    // secure output by executing the_content filter hook on $content
    $o .= apply_filters('the_content', $content);

    // run shortcode parser recursively
    $o .= do_shortcode($content);
  }

  // end carousel
  $o .= '</div>';

  // return output
  return $o;
}

/**
  * Quotation shortcode
*/

function wayfinder_quotation($atts = [], $content = null, $tag = '') {
  // normalize attribute keys, lowercase
  $atts = array_change_key_case((array)$atts, CASE_LOWER);

  // override default attributes with user attributes
  $wf_atts = shortcode_atts([
    'attribution' => 'A person, Some Company',
  ], $atts, $tag);

  // start output
  $o = '';

  // start quotation
  $o .= '<div class="quotation">';

  // start quote
  $o .= '<div class="quote">';

  // enclosing tags
  if (!is_null($content)) {
    // secure output by executing the_content filter hook on $content
    $o .= apply_filters('the_content', $content);

    // run shortcode parser recursively
    $o .= do_shortcode($content);
  }

  // end quote
  $o .= '</div>';

  // attribution
  $o .= '<p class="attribution">- ' . esc_html($wf_atts['attribution']) . '</p>';

  // end quotation
  $o .= '</div>';

  // return output
  return $o;
}

/**
  * Add shortcodes on init
*/

function wayfinder_shortcodes_init() {
  add_shortcode('wf-multi-col', 'wayfinder_multi_column');
  add_shortcode('wf-col', 'wayfinder_column');
  add_shortcode('wf-figure-grid', 'wayfinder_figure_grid');
  add_shortcode('wf-figure', 'wayfinder_figure');
  add_shortcode('wf-carousel', 'wayfinder_carousel');
  add_shortcode('wf-quotation', 'wayfinder_quotation');
}

add_action('init', 'wayfinder_shortcodes_init');
