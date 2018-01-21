var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;

gulp.task("serve", function() {
  browserSync.init({
    proxy: "http://the-web-developer-bootcamp/"
  });
  gulp.watch("*.html").on("change", reload);
  gulp.watch("*.css").on("change", reload);
});
