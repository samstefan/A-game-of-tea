var gulp = require('gulp')
  , browserify = require('browserify')
  , source = require('vinyl-source-stream')
  , stylus = require('gulp-stylus')
  , connect = require('gulp-connect')
  , concat = require('gulp-concat')
  , streamify = require('gulp-streamify')
  , uglify = require('gulp-uglify')
  , nib = require('nib')
  , jade = require('gulp-jade')

  , filePaths =
    { javaScript:
      { app: './app/js/app.js'
      , vendor:
        [ './app/js/vendor/jquery-2.1.3.min.js'
        , './app/js/vendor/stapes.min.js'
        , './app/js/vendor/pusher.js'
        ]
      }
    , stylus: ['./app/stylus/main.styl']
    , jade: ['./app/jade/index.jade']
    , images: './app/images/**/*'
    , output: './build/'
    }

  // Stylus options
  , stylusOptions =
    { set: ['compress']
    , use: nib()
    }


gulp.task('jsApp', function () {
  browserify(filePaths.javaScript.app)
    .bundle()
    .pipe(source('app.js'))
    // .pipe(streamify(uglify()))
    .pipe(gulp.dest(filePaths.output + 'js/'))
})

gulp.task('jsVendor', function () {
  gulp.src(filePaths.javaScript.vendor)
    .pipe(concat('plugins.js'))
    // .pipe(uglify())
    .pipe(gulp.dest(filePaths.output + 'js/'))
})

gulp.task('stylus', function () {
  gulp.src(filePaths.stylus)
    .pipe(stylus(stylusOptions))
    .pipe(gulp.dest(filePaths.output))
})

gulp.task('jade', function () {
  gulp.src(filePaths.jade)
    .pipe(jade())
    .pipe(gulp.dest(filePaths.output))
})

gulp.task('images', function () {
  gulp.src(filePaths.images)
    .pipe(gulp.dest(filePaths.output + 'images/'))
})

gulp.task('runServer', function () {
  connect.server({
    root: './build/'
  , host: '*'
  , port: '5001'
  })
})

gulp.task('watch', function() {
  gulp.watch('./app/js/**/*', ['jsApp'])
  gulp.watch('./app/jade/**/*', ['jade'])
  gulp.watch('./app/stylus/**/*', ['stylus'])
  gulp.watch('./app/images/**/*', ['images'])
})

gulp.task('default', ['watch', 'jsApp', 'stylus', 'jade', 'images', 'jsVendor', 'runServer'])
gulp.task('build', ['jsApp', 'jsApp', 'stylus', 'jade', 'images', 'jsVendor'])
gulp.task('server', ['runServer'])