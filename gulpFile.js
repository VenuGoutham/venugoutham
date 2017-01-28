var gulp = require("gulp");
var concat = require("gulp-concat");

var vendorFiles = ["./bower-components/angular/angular.js",
"./bower-components/bootstrap/dist/js/bootstrap.js"];

gulp.task('vendor',function(){
    return gulp.src(vendorFiles)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});