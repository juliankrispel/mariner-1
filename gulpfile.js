var gulp = require('gulp');
var watchify = require('watchify');
var spawn = require('child_process').spawn;
var browserify = require('browserify');
var connect = require('gulp-connect');
var path = require('path');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');
var scriptGlob = '**/*.+(cjsx|coffee|js|jsx)';

var createBundle = function(srcFile, destFile, destDir, isSpec, hasWatcher) {
  var opts = watchify.args;
  var bundler;
  opts.paths = ['./src', './node_modules'];
  opts.debug = true;
  //  opts.bare = true;
  opts.noParse = ['jquery', 'lodash', 'backbone', 'moment', 'reflux'];
  opts.extensions = ['.jsx', '.js'];
  if(hasWatcher === false){
    bundler = browserify(opts);
  }else{
    bundler = watchify(browserify(opts));
  }

  // add the file to bundle
  bundler.add(srcFile);
  // add any other browserify options or transforms here
  bundler.transform('babelify', {optional: ["es7.classProperties"]});

  bundler.on('update', bundle.bind(this, bundler, destFile, destDir, isSpec)); // on any dep update, runs the bundler
  bundler.on('error', gutil.log); // output build logs to terminal
  bundler.on('log', gutil.log); // output build logs to terminal
  bundler.on('log', function(string){
    if(string.indexOf('bytes written') > -1){
      console.log('bytes writte');
      livereload.changed('');
    }
  });
  return bundle(bundler, destFile, destDir, isSpec);
};

var bundle = function(bundler, destFile, destDir, isSpec){
  return bundler.bundle()
  // log errors if they happen
  .on('error', gutil.log)
  .pipe(source(destFile))
  // optional, remove if you dont want sourcemaps
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
  .pipe(sourcemaps.write('./')) // writes .map file
  .pipe(gulp.dest(destDir))
};

gulp.task('watchJs', function(){
  return createBundle('./src/index.js', 'app.js', './public', false, true);
});

gulp.task('buildJs', function(){
  return createBundle('./src/index.js', 'app.js', './public', false, false);
});

gulp.task('connect', function() {
  livereload.listen();
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('default', ['buildJs', 'watchJs', 'connect'])
