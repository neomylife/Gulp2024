
import gulp from "gulp";
import path from "../config/path.js";



import autoprefixer    from "gulp-autoprefixer";
import concat          from  "gulp-concat";
import csso            from "gulp-csso";
import cssimport       from "gulp-cssimport";
import rename          from "gulp-rename";
import size            from "gulp-size";
import shorthand       from "gulp-shorthand";
import group           from "gulp-group-css-media-queries";
import webcss          from "gulp-webp-css";
import app             from "../config/app.js";
import sassGlob        from "gulp-sass-glob";

import gulpSass        from "gulp-sass";
import nodeSass        from "node-sass";
    
const sass = gulpSass(nodeSass);




export default () => {
  return gulp
    .src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(sass())
    .pipe(concat("main.css"))
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(group())
    .pipe(size({ title: "Before" }))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(size({ title: "After" }))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }));
};

