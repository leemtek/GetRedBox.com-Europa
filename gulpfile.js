// Gulp Addons
var gulp = require("gulp"),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    gutil = require('gulp-util'),
    remoteSrc = require('gulp-remote-src')
;


/* =============================================================================
    Obliterate assets/dist folder.
============================================================================= */
gulp.task("clean", function () {
    return gulp.src("./other/aws/s3/dist", {read: false})
        .pipe(clean());
});


/* =============================================================================
    CSS Files
============================================================================= */
gulp.task("styles", function() {
    remoteSrc(
        [
            // Web Fonts
            "https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,500,500italic,700,700italic",
            "https://fonts.googleapis.com/css?family=Raleway:700,400,300",
            "https://fonts.googleapis.com/css?family=Pacifico",
            "https://fonts.googleapis.com/css?family=PT+Serif",

            // Bootstrap core CSS
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/bower_components/bootstrap/dist/css/bootstrap.min.css",

            // Plugins
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/bower_components/font-awesome/css/font-awesome.min.css",
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/fonts/fontello/css/fontello.css",
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/magnific-popup/magnific-popup.css",
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/rs-plugin/css/settings.css",
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/css/animations.css",
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/owl-carousel/owl.carousel.css",
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/owl-carousel/owl.transitions.css",
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/hover/hover-min.css",
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/morphext/morphext.css",

            // The Project core CSS file
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/css/style.css",

            // Color Scheme (In order to change the color scheme, replace the blue.css with the color scheme that you prefer)
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/css/skins/red.css",

            // Custom CSS
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/css/custom.css",
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/css/leemtek.css"
        ], { base: null }
    )
    .pipe(concat("styles.min.css"))
    .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
    })) // uglifycss
    .pipe(gulp.dest("./other/aws/s3/dist/"))
;});


/* =============================================================================
    JavaScript files placed at the end of the document so the pages load faster
============================================================================= */
gulp.task("scripts", function() {
    remoteSrc(
        [
            // Jquery and Bootstap core js files
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/jquery.min.js",
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/bower_components/bootstrap/dist/js/bootstrap.min.js",

            // Modernizr javascript
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/modernizr.js",

            // jQuery Revolution Slider
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/rs-plugin/js/jquery.themepunch.tools.min.js",
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/rs-plugin/js/jquery.themepunch.revolution.min.js",

            // Isotope javascript
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/isotope/isotope.pkgd.min.js",

            // Magnific Popup javascript
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/magnific-popup/jquery.magnific-popup.min.js",

            // Appear javascript
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/waypoints/jquery.waypoints.min.js",

            // Count To javascript
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/jquery.countTo.js",

            // Parallax javascript
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/jquery.parallax-1.1.3.js",

            // Contact form
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/jquery.validate.js",

            // Morphext
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/morphext/morphext.min.js",

            // Background Video
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/vide/jquery.vide.js",

            // Owl carousel javascript
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/owl-carousel/owl.carousel.js",

            // SmoothScroll javascript
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/jquery.browser.js",
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/plugins/SmoothScroll.js",

            // Initialization of Plugins
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/js/template.js",

            // Custom Scripts
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/the_project/js/custom.js"
        ], { base: null }
    )
    .pipe(concat("scripts.min.js"))
    .pipe(uglify().on("error", gutil.log))
    .pipe(gulp.dest("./other/aws/s3/dist/"))
;});


/* =============================================================================
    Update S3 Assets
============================================================================= */
// Disabled since this a public repository.  Copy output to S3.


/* =============================================================================
    Start Tasks
============================================================================= */
gulp.task('default', [], function() {
    gulp.start("clean", "styles", "scripts");
});
