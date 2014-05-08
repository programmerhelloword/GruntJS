module.exports = function(grunt) {
    grunt.initConfig({
      reactjsx: {
        all: {
          files: [{
            expand: true,
            src: [
              '../htmlv2/MenuListComp.jsx',
              '../htmlv2/MenuListItemComp.jsx'
            ],
            ext: '.js'
          }]
        },
      }, 
      // Metadata.
      meta: {
          basePath: '../',
          srcPath: '../htmlv2/',
          deployPath: '../htmlv2/'
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
              src: ['<%= meta.srcPath %>../htmlv2/MenuListComp.js', 
              '<%= meta.srcPath %>../htmlv2/MenuListItemComp.js'],
              dest: '<%= meta.deployPath %>../htmlv2/jsxdeploy.js'
          }
      }
    });
    grunt.loadNpmTasks('grunt-reactjsx');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['reactjsx','concat']);
  };