var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');
var merge = require('merge-stream');

var filesToCopy = [
  {
    src: './node_modules/reveal.js/js/reveal.js',
    dest: '.'
  },
  {
    src: './node_modules/reveal.js/css/reveal.css',
    dest: '.' 
  },
  {
    src: './node_modules/reveal.js/lib/css/zenburn.css',
    dest: '.' 
  },
  {
    src: './node_modules/reveal.js/css/theme/*.css',
    dest: './css' 
  },
  {
    src: './node_modules/reveal.js/lib/js/*',
    dest: './lib' 
  },
  {
    src: './node_modules/reveal.js/lib/font/league-gothic/*',
    dest: './lib/font/league-gothic' 
  },
  {
    src: './node_modules/reveal.js/plugin/**/*',
    dest: './plugins'
  }
];

gulp.task('copy:reveal.js:files', function() {
	var streams = [];
	filesToCopy.forEach(function(file) {
		streams.push(gulp.src(file.src).pipe(gulp.dest(file.dest)));
	});
	return merge.apply(this, streams);
});

gulp.task('build', function(cb) {
  runSequence('copy:reveal.js:files',  cb);
});