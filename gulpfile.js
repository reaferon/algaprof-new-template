var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var minifyCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var jsmin = require('gulp-jsmin');
//var notify = require("gulp-notify");
var sass = require('gulp-sass');


gulp.task('default', function () {
    //gulp.watch('js/*.js', gulp.series('js_task'));
    gulp.watch(['vendor/*.css','helpers/*.scss', 'blocks/**/*.scss'], gulp.series('css_task'));
    //return gulp.watch('dist/scss/*.scss', gulp.series('spatonika_css'));
});


gulp.task('css_task', function (done) {
    var notify = require('gulp-notify');

    return gulp.src(['blocks/all.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concatCss('styles.css'))
        //.pipe(minifyCSS(''))
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('./'))
        .pipe(notify({
            'title': 'CSS',
            'message': 'Styles was change',
           // 'sound': 'Pop',
            'onLast': true,
            'wait': true
        }))
        .on('end', done);
});

gulp.task('js_task', function (done) {
    var notify = require('gulp-notify');
    return gulp.src([
        'js/*.js'
    ])
        .pipe(concat('app.js'))
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('./'))
        .pipe(notify({
            'title': 'Javascript',
            'message': 'JS was change',
            //'sound': 'Pop',
            //"icon": path.join(__dirname, "gulp.png"), // case sensitive
            'onLast': true,
            'wait': true
        }))
        .on('end', done);
});