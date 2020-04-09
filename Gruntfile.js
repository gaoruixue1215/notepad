module.exports = function (grunt) {
    grunt.initConfig({
    htmlmin: {
      options: {
          collapseWhitespace: true,
          preserveLineBreaks: false                      
      },
      files: {
          src: './index.html',
          dest: 'dist/index.html'                            
      }    
    },
    cssmin: {
          'dist/font/list.css': './font/list.css',
          'dist/font/font.css': './font/font.css',
          'dist/menubar/menubar.css': './menubar/menubar.css',
          'dist/editor/editor.css':'./editor/editor.css',
          'dist/notepad.css':'./notepad.css'
    },
    uglify: {
      release:{
        files: {
          'dist/font/list.js': './font/list.js',
          'dist/font/font.js': './font/font.js',
          'dist/editor/editor.js':'./editor/editor.js',
          'dist/menubar/menubar.js': './menubar/menubar.js',
          'dist/menudata.js':'./menudata.js'
        }
      }         
    }
    });
  
      grunt.loadNpmTasks('grunt-contrib-htmlmin');
      grunt.loadNpmTasks('grunt-contrib-cssmin');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.registerTask('default', ['uglify','cssmin','htmlmin']);
  };
