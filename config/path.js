const pathSrc = "./#src";
const pathDest = "./public/";


export default  {
  root: pathDest,

//   html:{
//       src: pathSrc + "/html/*.html",
//       watch: pathSrc + "/html/**/*.html",
//       dest: pathDest 
//   },
 
  pug:{
      src: pathSrc + "/pug/*.pug",
      watch: pathSrc + "/pug/**/*.pug",
      dest: pathDest 
  },
 
  css:{
      src: pathSrc + "/css/*.css",
      watch: pathSrc + "/css/**/*.css",
      dest: pathDest + "/css"
  },
  scss:{
      src: pathSrc + "/scss/*.scss",
      watch: pathSrc + "/scss/**/*.scss",
      dest: pathDest + "/css"
  },
  js:{
      src: pathSrc + "/js/**/*.js",
      watch: pathSrc + "/js/**/*.js",
      dest: pathDest + "/js"
  },
  img:{
      src: pathSrc + "/img/**/*",
      watch: pathSrc + "/img/**/*",
      dest: pathDest + "/img"
  },
  svg:{
      src: pathSrc + "/img/svg/**/*.svg",
      watch: pathSrc + "img/svg/**/*",
      dest: pathDest + "/img/svg"
  },


  fonts:{
      src: pathSrc + "/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
      watch: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
      dest: pathDest + "/fonts"
  }
 
}