module.exports = function(grunt) {
    grunt.initConfig({
        browserifying: {
            options:{
                watch: true,
            },
            files: {
                './main.js': './app/js/main.js'
            },
        },
        watch: {
            scripts: {
                files: ['**/*.js'],
                 tasks: ['browserifying'],
                 options: {
                     spawn: false,
                 }
             }
        }
    });
    
    grunt.loadNpmTasks('grunt-browserifying');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
