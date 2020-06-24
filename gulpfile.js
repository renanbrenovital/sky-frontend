let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('default', function() { 
    return new Promise(function(resolve, reject) {
        console.log("Gulp funcionando...");
        resolve();
    });
});