import gulp from "gulp";



import svgSprite  from "gulp-svg-sprite";



import path from "../config/path.js";






const svgSymbol = {
	mode: {
		symbol: {
			sprite: './sprite.symbol.svg',
		},
	},
	shape: {
		transform: [
			{
				svgo: {
					js2svg: { indent: 4, pretty: true },
					plugins: [
						{
							name: 'removeAttrs',
							params: {
								attrs: '(fill|stroke)',
							},
						},
					],
				},
			},
		],
	},
};






export default() => {
  return gulp.src(path.svg.src)
  .pipe(svgSprite(svgSymbol))
  .pipe(gulp.dest(path.img.dest))
};


