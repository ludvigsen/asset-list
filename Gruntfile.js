module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/css/main.css': 'app/sass/main.scss'
                }
            }
        },
        clean: ['dist/'],
        browserify: {
            'dist/js/main.js': ['app/js/main.js'],
            options:{
                "alertify":         { path: "node_modules/alertify/lib/alertify.min.js", exports: "alertify" },
            }

        }, 
        watch: {
            scripts: {
                files: ['**/*.js'],
                 tasks: ['browserify'],
                 options: {
                     spawn: false,
                 }
             },
             sass: {
                 files: ['**/*.scss'],
                 tasks: ['sass']
             }
        }
    });
    
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['clean', 'browserify', 'sass']);

};
