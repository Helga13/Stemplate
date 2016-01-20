var gulp = require('gulp'),
	bower = require('bower'),
	autoprefixer = require('autoprefixer'),
	browserSync = require('browser-sync').create(),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat'),
	postcss = require('gulp-postcss'),
	rename = require('gulp-rename'),
	svgstore = require('gulp-svgstore'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-minify-css'),
	svgmin = require('gulp-svgmin'),
	svgstore = require('gulp-svgstore'),
	sass = require('gulp-sass'),
	handlebars = require('gulp-handlebars'),
	wrap = require('gulp-wrap'),
	declare = require('gulp-declare');
    watch = require('gulp-watch');

gulp.task('css', function () {
	return gulp.src('./app/dev/sass/*.scss')
		.pipe(sass())
		.pipe(postcss([ autoprefixer({ 
			browsers: ["not ie < 9", "ff >= 10", "ios_saf >= 4.1", "Safari >= 4", "Chrome > 15", "and_chr 47", "Opera 15", "not Android < 3"],
			cascade: true
		}) ]))
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./app/prod/css/'));
});

gulp.task('svg', function () {
	return gulp.src('./app/prod/img/svg/*.svg')
		//.pipe(svgmin())
		.pipe(svgstore())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./app/prod/img/'));
});

gulp.task('templates', function(){
	gulp.src('./app/prod/test/templates/*.html')
		.pipe(handlebars())
		.pipe(wrap('Handlebars.template(<%= contents %>)'))
		.pipe(declare({
			namespace: 'Views.templates',
			noRedeclare: true
		}))
		.pipe(concat('templates.js'))
		.pipe(gulp.dest('./app/prod/test/js/'));
});

gulp.task('js', function () {
	return gulp.src('./app/dev/js/*.js')
		// .pipe(gulp.dest('./app/prod/js/'))
		// .pipe(gulp.src('./app/dev/js/*.js'))
		// .pipe(uglify())
		// .pipe(rename({
		// 	suffix: '.min'
		// }))
		.pipe(gulp.dest('./app/prod/js/'));
});

gulp.task('sync', function () {
	browserSync.init({
		server: {
			baseDir: "./app/"
		}
	});
});

gulp.task('libcss', function () {
	return gulp.src('./bower_components/**/*.css')
		.pipe(concat('lib.css'))
		.pipe(gulp.dest('./app/prod/css/'));
});

gulp.task('default', ['sync', 'libcss', 'templates'], function () {

	gulp.watch('./app/prod/test/templates/*.html', ["templates"], browserSync.reload);

	gulp.watch('./app/prod/test/js/*.js', browserSync.reload );

	gulp.watch('./app/*.html', browserSync.reload );

	gulp.watch('./app/dev/js/*.js', ['js'], browserSync.reload );

	gulp.watch('./app/dev/sass/*.scss', ['css']);

	gulp.watch("./app/prod/css/*.css", browserSync.reload);
	
	gulp.watch("./app/prod/img/svg/**", ['svg']);
});
