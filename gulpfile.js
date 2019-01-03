const gulp = require('gulp');
const jsdoc = require('gulp-jsdoc3');
const mocha = require('gulp-mocha');

gulp.task('test', () => {
	gulp.src('test/*.test.js', {read: false})
		.pipe(mocha({
            compilers: 'js:babel-register'
        }));
});

gulp.task('doc', function (cb) {
	var config = require('./jsdoc.conf.json');
	gulp.src(['README.md', './src/**/*.js'], {read: false})
		.pipe(jsdoc(config, cb));
});

gulp.task('default', ['test', 'doc'])