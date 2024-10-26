import gulp from "gulp";
import app from "../config/app.js";


import path         from "../config/path.js";
import webpHtml     from "gulp-webp-html";
import gulpIf       from "gulp-if";
import pugs         from "gulp-pug";





export default () => {
    return (
      gulp
        .src(path.pug.src)
        
        
        .pipe(pugs({ 
          pretty: true
         }))
        .pipe(gulpIf(app.isProd,webpHtml()))
        .pipe(gulp.dest(path.pug.dest))
       
    );
  };
  