let project_folder = 'dist'; //папка, в которую будет выводиться весь результат работы галпа. то, что мы будем выгружаать на сервер для демонстрации. ее же мы передаем заказчику. 

let source_folder = 'src';

let path = {
  //различные пути к файлам и папкам
  build: {
    html: project_folder + '/',
    css: project_folder + '/css/',
    js: project_folder + '/js/',
    img: project_folder + '/img/',
    fonts: project_folder + '/fonts/'
  },
  src: {
    html: source_folder + '/*.html',
    css: source_folder + '/scss/style.scss',
    js: source_folder + '/js/script.js',
    img: source_folder + '/img/**/*.{jpg, png, svg, gif,ico,webp}',
    fonts: source_folder + '/fonts/*.ttf'
  },
  watch: {
    html: source_folder + '/**/*.html',
    css: source_folder + '/scss/**/*.scss',
    js: source_folder + '/js/**/*.js',
    img: source_folder + '/img/**/*.{jpg, png, svg, gif,ico,webp}',
  },
  clean: './' + project_folder + '/'
}

let {
  src,
  dest
} = require('gulp'),
  gulp = require('gulp'),
  browserSync = require('browser-sync').create();

function browsersync(params) {
  browserSync.init({
    server: {
      baseDir: './' + project_folder + '/'
    },
    port: 3000,
    notify: false
  })
}

function html(){
  return src(path.src.html)
  .pipe(dest(path.build.html))
  .pipe(browserSync.stream())
}

let build = gulp.series(html)
let watch=gulp.parallel(browsersync);


exports.watch = watch;
exports.default = watch;