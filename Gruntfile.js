module.exports = function (grunt) {
    //定义变量
    var path={
        src:"src/main/webapp/WEB-INF/static/app",
        dist:"src/main/webapp/WEB-INF/static/build",
        temp:"src/main/webapp/WEB-INF/static/.tmp",
        pages:"src/main/webapp/WEB-INF/pages",
        tags:"src/main/webapp/WEB-INF/tags"
    }
    //编写Tasks
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        path:path,
        /*Tasks start*/
        less:{
            compile:{
                options:{
                    sourceMap:true,
                    sourceMapRootpath:'css/'
                },
                files:[
                    {
                        expand:true,
                        cwd:"css/",
                        src:'*.less',
                        ext: '.css',
                        dest:'css/'
                    }
                ]
            }
        },
        watch:{
            less:{
                files:['css/**/*.less'],
                tasks:['less']
            }
        }
    });
    //自动加载package.json里的依赖
    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
    require('time-grunt')(grunt);
    //注册Tasks
    grunt.registerTask('default',['less','watch']);
};