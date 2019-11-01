'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var svgSprite = require('gulp-svg-sprites');
var fileinclude = require('gulp-file-include');
var markdown = require('markdown');

// var spritesmith = require('gulp.spritesmith');

sass.compiler = require('node-sass');

var config = {
  src: './project/scss/**/*.scss',
  // dest_app: './app/design/frontend/cj/default/web/css/',
  dest: './project/css/'
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
  return gulp.src('./project/images/svg/*.svg')
    .pipe(svgSprite({
      templates: {
        scss: true
      },
      cssFile: "scss/partials/_sprite.scss",
      svg: {
        sprite: "images/svg.svg"
      },
      preview: {
        sprite: "css/index.html"
      }
    }))
    .pipe(gulp.dest("./project"));
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

// file include
gulp.task('fileinclude', function (done) {
  // gulp.src(['./project/src/sub/index.html', './project/src/sub/*.html'], {
  gulp.src(['./project/src/index.html', './project/src/*.html'])
    .pipe(fileinclude({
      filters: {
        markdown: markdown.parse
      }
    }))
    .pipe(gulp.dest('./project/'));
    done();
});

gulp.task('watch', function () {
  // gulp.watch('./app/design/frontend/Emthemes/laparis/web/css/sass/**/*.scss', gulp.series('sass'));
  gulp.watch([config.src, './project/src/*.html', './project/src/sub/*.html'], gulp.series('sass', 'fileinclude'));
});
