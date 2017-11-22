var gulp = require("gulp");  //如果你了解模块化，这种语法应该很熟悉吧？
var sass = require("gulp-ruby-sass");   //将sass编译模块加载进来

//给gulp定义一个任务，编译scss文件
gulp.task("compileSass", function () { 
         sass("scss/*.scss",{
               style: "expanded"
         }).pipe(gulp.dest("css"))
});
gulp.task('watchingSass',function (){
    gulp.watch('scss/*.scss',['compileSass'])
});
//gulp.watch这个方法会实时监测文件的变化执行相应任务
//这样一旦检测到文件变化，都会自动执行compileSass任务，到达了实时编译的效果

var connect = require("gulp-connect"); //热部署（即时刷新）
//定义一个任务，处理html
gulp.task("refreshHTML",function(){
     //src用来读取，pipe用来输送
     gulp.src("./*.html").pipe(connect.reload());
});
//监听任务
gulp.task("watch",function (){
     //让connect启动一个服务器，这样它才能即时刷新浏览器
     connect.server({
          livereload:true
     });
     //检测文件的变化，执行相应的任务
     gulp.watch("./*.html", ["refreshHTML"]);
});
