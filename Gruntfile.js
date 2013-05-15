"use strict";
var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point));
};


module.exports = function(grunt){
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-livereload");
  grunt.loadNpmTasks("grunt-regarde");

  grunt.initConfig({
    livereload: {
      port: 35729
    },
    connect: {
      livereload: {
        options: {
          port: 9000,
          base: "app/",
          middleware: function(connect, options){
            return [lrSnippet, folderMount(connect, options.base)];
          }
        }
      }
    },
    regarde: {
      livereload: {
        files: "app/**/*",
        tasks: ["livereload"]
      }
    }
  });

  grunt.registerTask("default", ["livereload-start", "connect", "regarde"]);

}