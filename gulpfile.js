'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var svgSprite = require("gulp-svg-sprites");
// var spritesmith = require('gulp.spritesmith');

sass.compiler = require('node-sass');

var config = {
  src: './app/design/frontend/cj/default/web/css/**/*.scss',
  dest_app: './app/design/frontend/cj/default/web/css/',
  dest: './pub/static/frontend/cj/default/en_US/css/'
};

// Error message
var onError = function (err) {
  notify.onError({
    title: 'Gulp',
    subtitle: 'Failure!',
    message: 'Error: <%= error.message %>',
    sound: 'Beep'
  })(err);

  this.emit('end');
};

// Image Sprite
// gulp.task('sp', function () {
//   var spriteData = gulp.src('./app/design/frontend/cj/default/web/images/sp_img/*.png').pipe(spritesmith({
//     imgName: 'sprite.png',
//     padding: 4,
//     cssName: '_sprite.scss'
//   }));
//   return spriteData.img.pipe(gulp.dest('./app/design/frontend/cj/default/web/images')),
//         spriteData.css.pipe(gulp.dest('./app/design/frontend/cj/default/web/css'));
// });

// SVG Sprites
gulp.task('sprites', function () {
  return gulp.src('./app/design/frontend/cj/default/web/images/svg/*.svg')
    .pipe(svgSprite({
      templates: {
        scss: true
      },
      cssFile: "css/partials/_sprite.scss",
      svg: {
        sprite: "images/svg.svg"
      },
      preview: {
        sprite: "css/index.html"
      }
    }))
    .pipe(gulp.dest("./app/design/frontend/cj/default/web"));
});

gulp.task('sass', function () {
  return gulp.src([config.src])
    .pipe(sourcemaps.init())
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest([config.dest]));
});

// app에 css file 생성
gulp.task('sass-app', function () {
  return gulp.src([config.src])
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest([config.dest_app]))
});


gulp.task('watch', function () {
  // gulp.watch('./app/design/frontend/Emthemes/laparis/web/css/sass/**/*.scss', gulp.series('sass'));
  gulp.watch([config.src], gulp.series('sass'));
});
