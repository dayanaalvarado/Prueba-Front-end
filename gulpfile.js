var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var img = require('gulp-image');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css'); //minificar


gulp.task('script', function(){

	//aca va la tarea
	gulp.src('src/js/*.js')
	//unir todos los archivos
	.pipe(concat('script.min.js'))
	//enferlo(miniizarlo)
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));//para dejarlo en esa carpeta
});

gulp.task('style', function() {
	//aqui va la tarea
	gulp.src('src/sass/main.scss')//transformar los sass
	.pipe(sass().on('error', sass.logError))//para que avise errores mas explicitos
	//minimizarlo
	.pipe(minifyCSS())
	//dejar en archivo de destino
	.pipe(concat('mystyle.min.css'))
	//dejar en carpeta
	.pipe(gulp.dest('dist/css'))
});

gulp.task('images', function() {
 gulp.src('docs/**/*.{jpg,jpeg,gif,png,svg}')
    .pipe(gulp.dest('dist/img'));
});




gulp.task('default', ['images', 'style', 'script']);