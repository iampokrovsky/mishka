var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var htmlmin = require("gulp-htmlmin");
var uglify = require("gulp-uglify");
var cheerio = require("gulp-cheerio");
var csscomb = require("gulp-csscomb");
var concat = require("gulp-concat");

gulp.task("buildClean", function () {
  return del(["./build/**", "!./build/img"]);
});

gulp.task("html", function () {
  return gulp.src("./source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest("./build"))
});

gulp.task("css", function () {
  return gulp.src("./source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csscomb())
    .pipe(gulp.dest("./build/css"))
    .pipe(minify())
    .pipe(rename("./style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("./build/css"))
    .pipe(server.stream());
});

gulp.task("outline", function () {
  return gulp.src([
    "./source/css/outline.css"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("./build"));
});

gulp.task("copy", function () {
  return gulp.src([
    "./source/img/**/*.webmanifest",
    "./source/fonts/**/*.{woff,woff2}",
    // "./source/js/**/*.js"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("./build"));
});

gulp.task("scripts", function () {
  return gulp.src("./source/js/**/*.js")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(concat('script.js'))
    .pipe(gulp.dest("./build/js"))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("./build/js"))
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    // server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/*.html").on("change", gulp.series("html", server.reload));
  gulp.watch("source/js/**/*.js").on("change", gulp.series("scripts", server.reload));
  // gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("imgСlean", function () {
  return del(["./build/img"]);
});

gulp.task("img", function () {
  return gulp.src("./source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.mozjpeg({ progressive: true }),
      imagemin.svgo()
    ]), {
      base: "source"
    })
    .pipe(gulp.dest("./build/img"));
});

gulp.task("webp", function () {
  return gulp.src("./source/img/*.{png,jpg}")
    .pipe(webp({ quality: 60 }))
    .pipe(gulp.dest("./build/img"));
});

gulp.task("sprite", function () {
  return gulp.src("./build/img/**/icon-*.svg")
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[opacity]').removeAttr('opacity');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("./build/img"));
});

gulp.task("stylecomb", function () {
  return gulp.src([
    "./source/sass/**/*.scss"
  ], {
    base: "source"
  })
    .pipe(csscomb())
    .pipe(gulp.dest("./source"))
});

gulp.task("images",
  gulp.series(
    "imgСlean",
    gulp.parallel(
      "img",
      "webp",
    ),
    "sprite"
  )
);

gulp.task("build",
  gulp.series(
    "buildClean",
    gulp.parallel(
      "html",
      "outline",
      "css",
      "copy",
      "scripts"
    ),
    "stylecomb"
  )
);

// gulp.task("start", gulp.series("build", "server"));
