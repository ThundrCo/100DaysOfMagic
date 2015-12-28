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
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var paths = {
    sass:['./app/scss/**/*.scss','!./app/scss/**/_*.scss'],
    sassInput:['./app/scss/**/*.scss'],
    ejs:['./app/views/**/*.ejs','!./app/views/**/_*.ejs'],
    ejsInput:['./app/views/**/*.ejs'],
    js:['./app/js/**/*.js','!./app/js/**/_*.js']
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

// Compile Our EJS
gulp.task('ejs', function() {
    return gulp.src(paths.ejs)
        .pipe(ejs({msg:"Gulping EJS"}))
        .on('error',gutil.log)
        .pipe(gulp.dest('public/'));
});

//Compile JS files
gulp.task('js', function() {
  return gulp.src(paths.js)
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('./public/js'));
});


//BrowserSync
gulp.task('browser-sync', function() {
    browserSync.init(["../css/*.css", "../js/*.js"],{
        server: {
            baseDir: "./public"
        },
        port: 3000
    });
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch([paths.sassInput], ['sass',reload]);
    gulp.watch([paths.ejsInput], ['ejs',reload]);
    gulp.watch([paths.js], ['js',reload]);
});


// Default Task
gulp.task('default', ['sass', 'ejs', 'js', 'watch','browser-sync']);