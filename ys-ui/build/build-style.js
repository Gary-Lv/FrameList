const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const less = require("gulp-less");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");

// 编译less
gulp.task("css", async () => {
  gulp
    .src("../YsStyle/styles/index.less")
    .pipe(less())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions", "ie > 8"],
      })
    )
    .pipe(cleanCSS())
    .pipe(rename("ys-ui.css"))
    .pipe(gulp.dest("../dist/styles"));
});

// 拷贝字体文件
// gulp.task('fonts', function () {
//     gulp.src('../src/styles/common/iconfont/fonts/*.*')
//         .pipe(gulp.dest('../dist/styles/fonts'));
// });

gulp.task("default", gulp.series(["css"]));
