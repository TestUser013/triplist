const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: '.'
        }
    });
    gulp
        .watch(['./*.*', './*/**.*'])
        .on('change', browserSync.reload);
});

exports.default = gulp.series('browser-sync');
