module.exports = function(grunt) {
 
    // Project configuration.
    grunt.initConfig({
 
        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),
 
        // Metadata.
        meta: {
            basePath: '../',
            srcPath: '../css/',
            deployPath: '../css/'
        },
 
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',
 
        // Task configuration.
        concat: {
            options: {
                stripBanners: true
            },
            dist: {
                src: ['<%= meta.srcPath %>bootstrap.css', 
                '<%= meta.srcPath %>prettyPhoto.css',
                '<%= meta.srcPath %>modurn-style.css',
                '<%= meta.srcPath %>custom2.css'],
                dest: '<%= meta.deployPath %>cssdeploy.css'
            }
        }
    });
 
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
 
    // Default task
    grunt.registerTask('default', ['concat']);
 
};