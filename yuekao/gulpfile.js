var gulp = require('gulp');
var server = require('gulp-webserver');
var less = require('gulp-less');
var mock = require('./src/mock/main');
// less
gulp.task('less', function() {
    gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./src/css'));
});

// server
gulp.task('server', function() {
    gulp.src('./src')
        .pipe(server({
            open: true,
            liverload: true,
            port: '8888',
            middleware: function(req, res, next) {
                if (/\/api/g.test(req.url)) {
                    res.end(JSON.stringify(
                        mock(req.url)
                    ));
                };
                next();
            }
        }));
});
// watch
gulp.task('watch', function() {
    gulp.watch('./src/less/*.less', ['less']);
});
// default
gulp.task('default', ['server', 'less', 'watch']);