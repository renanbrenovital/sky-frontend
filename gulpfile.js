let gulp = require('gulp');

gulp.task('default', function() { 
    return new Promise(function(resolve, reject) {
        console.log("Gulp funcionando...");
        resolve();
    });
});