var gulp = require('gulp');
var compass = require('gulp-compass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var size = require('gulp-size');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var clean = require('gulp-clean');



var path_scss = './app/scss';
var path_css = './dist/css';
var path_app_js = './app/js';
var path_dist_js = './dist/js';
var path_app_images = './app/images';
var path_dist_images = './dist/images';

// Проверка ошибок в скриптах
gulp.task('lint', function () {
    return gulp.src(path_app_js + '/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
// minify images
gulp.task('images', function () {
    return gulp.src(path_app_images + '/**/*.{jpg,png}')
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: false,
            interlaced: false
        })))
        .pipe(size({
            title: 'size of images'
        }))
        .pipe(gulp.dest(path_dist_images));
});

// Чистим директорию назначения и делаем ребилд, чтобы удаленные из проекта файлы не остались
gulp.task('clean', function() {
  return gulp.src([path_dist_images, path_dist_js, path_css], {read: false})
    .pipe(clean());
});

gulp.task('scripts', function () {
    return gulp.src(path_app_js + '/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(path_dist_js))
        .pipe(rename('scripts.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest(path_dist_js));
});

// собирает css из scss
gulp.task('sass', function () {
    gulp.src(path_scss + '/**/*.scss')
        .pipe(compass({
            config_file: './app/config/config.rb',
            css: path_css,
            sass: path_scss
        }))
        .pipe(prefix("last 20 version", "ie 8", "ie 7"))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path_css))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest(path_css))
        .pipe(minifyCSS())
        .pipe(gulp.dest(path_css));
});


gulp.task('sass:watch', function () {
    gulp.watch(path_scss + '/**/*.scss', ['sass']);
    gulp.watch(path_app_js + '/**/*.js', ['lint', 'scripts']);
    gulp.watch(path_app_images + '/**/*', ['images']);
});

//gulp.task('default', ['sass:watch']);
gulp.task('default', ['clean','sass:watch'], function() {
    gulp.start('sass', 'scripts', 'images');
});