var gulp = require("gulp");
const babel = require('gulp-babel');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("build", function() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("build"));
});

gulp.task('watch', function() {
    gulp.watch(["src/**/*.ts"], ['build'])
});