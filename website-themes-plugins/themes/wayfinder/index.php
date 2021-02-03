<?php get_header(); ?>
<div class="wrap">
	<header class="page-header">
		<h1 class="page-title">API Test Page, Bruh</h1>
	</header>
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<ul id="api-links">
				<li><a href="#" data-url="http://wayfinder.cms/wp-json/wp/v2/pages/2">Home</a></li>
				<li><a href="#" data-url="/about">About</a></li>
				<li><a href="#" data-url="/work">Work</a></li>
				<li><a href="#" data-url="/work/test-page">Work Detail</a></li>
				<li><a href="#" data-url="/ideas">Ideas</a></li>
				<li><a href="#" data-url="/ideas/test-page">Idea Detail</a></li>
				<li><a href="#" data-url="/contact">Contact</a></li>
			</ul>
			<div id="results"></div>
		</main><!-- #main -->
	</div><!-- #primary -->
</div><!-- .wrap -->
<?php get_footer();
