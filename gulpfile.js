import gulp from "gulp";


import browserSync from "browser-sync";
// import liveserver from "gulp-server-livereload";



import path from "./config/path.js";
import pug from "./task/pug.js";
import scss from "./task/scss.js";
import js from "./task/js.js";
import img from "./task/img.js";
import cleaner from "./task/clean.js";
import fonts from "./task/fonts.js";
import svg from "./task/svg.js";



const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    },
    port:3000,
    notify:false
  });
};








const watcher = () => {

  gulp.watch (path.pug.watch, pug).on("all", browserSync.reload);
  gulp.watch (path.scss.watch, scss).on("all", browserSync.reload);
  gulp.watch (path.js.watch, js).on("all", browserSync.reload);
  gulp.watch(path.img.watch,img).on("all", browserSync.reload);
  gulp.watch (path.fonts.watch, fonts).on("all", browserSync.reload);
  gulp.watch (path.svg.watch, svg).on("all", browserSync.reload);
};



export { pug };
export {scss};
export { img };
export {fonts};
export {js};
export {svg};
export {watcher};



const build =  gulp.series(
  cleaner,
  gulp.parallel( pug,img, fonts, js, scss, svg),
  gulp.parallel(watcher, server),
  );

 
  const dev =  gulp.series(
  cleaner,
  scss, 
  gulp.parallel( pug,  js, img, fonts, svg ),
  gulp.parallel( watcher,server)
  );

  export {build};
  export {dev};

 export default dev;
