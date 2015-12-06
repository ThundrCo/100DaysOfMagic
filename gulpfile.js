var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var ejs = require('gulp-ejs');

var paths = {
    sass:['./app/scss/*.scss'],
    sass1:['./app/scss/partials/*.scss'],
    ejs:['./app/views/*.ejs'],
    ejs1:['./app/views/**/*.ejs'],
    js:['./app/js/*.js']
}

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src(paths.sass)
        .pipe(sass())
        .on('error',sass.logError)
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('public/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss()) 
        .pipe(gulp.dest('public/css'));
});

// Compile Our Sass
gulp.task('ejs', function() {
    return gulp.src(paths.ejs)
        .pipe(ejs({msg:"Gulping EJS"}))
        .on('error',gutil.log)
        .pipe(gulp.dest('public/views'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch([paths.sass,paths.sass1], ['sass']);
    gulp.watch([paths.ejs,paths.ejs1], ['ejs']);
});

// Default Task
gulp.task('default', ['sass', 'ejs', 'watch']);