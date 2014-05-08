module.exports = function(grunt) {
    grunt.initConfig({
      reactjsx: {
        all: {
          files: [{
            expand: true,
            src: [
              '../comp/MenuListComp.jsx',
              '../comp/MenuListItemComp.jsx'
            ],
            ext: '.js'
          }]
        },
      },
    });
    grunt.loadNpmTasks('grunt-reactjsx');
    grunt.registerTask('default', ['reactjsx']);
  };