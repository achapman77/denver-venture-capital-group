// https://www.freecodecamp.org/news/how-to-set-up-gulp-sass-using-the-command-line-if-youre-a-beginner-17729f53249/

'use strict';
const gulp = require('gulp');

const sass = require('gulp-sass');

// https://www.freecodecamp.org/news/how-to-minify-images-with-gulp-gulp-imagemin-and-boost-your-sites-performance-6c226046e08e/
const imagemin = require('gulp-imagemin');
 
// gulp.task('default', () =>
//     gulp.src('src/images/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/images'))
// );

function imgSquash() {
    return gulp
        .src("./images-raw/*")
        .pipe(imagemin()) 
        .pipe(gulp.dest("./images"));
}

gulp.task("imgSquash", imgSquash);

gulp.task("watch", () => { 
    gulp.watch("./images-raw/*", imgSquash);
});

gulp.task("default",gulp.series("imgSquash","watch"));