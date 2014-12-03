module.exports = function (grunt) {
    'use strict';
    var app = 'assets/';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        // Task configuration
        watch: {
            css: {
                files: ['<%= app %>css/{,*/}*.{scss,sass}'],
                tasks: ['compass', 'copy:css']
            },
//            js: {
//                files: ['<%= config.app %>/scripts/{,*/}*.js'],
//                tasks: ['jshint'],
//                options: {
//                  livereload: true
//                }
//            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: '<%= app %>css',
                    cssDir: '<%= app %>css',
                    imagesDir: '<%= app %>images',
                    fontsDir: '<%= app %>css/fonts',
                    importPath: './bower_components',
                    httpImagesPath: '/images',
                    httpGeneratedImagesPath: '/images/generated',
                    httpFontsPath: '/css/fonts',
                    relativeAssets: false,
                    assetCacheBuster: false,
                    sourcemap: true
                }
            }
        },
        copy: {
            css: {
                files: [
                    {expand: true, flatten: true, src: ['<%= app %>css/screen.css'], dest: 'css'},
                ]
            }
        },
//        sprite:{
//            desktop: {
//                src: 'assets/images/sprites/desktop/*.png',
//                destImg: 'assets/images/sprites/desktop_sprite.png',
//                destCSS: 'assets/css/libs/_sprites.scss',
//                imgPath: '../images/desktop_sprite.png',
//                engine: 'pngsmith'
//            }
//        },
//        imagemin: {
//            dist: {
//                files: [{
//                    expand: true,
//                    cwd: 'assets/images',
//                    src: '{,*/}*.{png,jpg,jpeg,gif}',
//                    dest: 'images'
//                }]
//            }
//        },
//        webfont: {
//            icons: {
//                src: 'assets/images/icons/*.svg',
//                dest: 'assets/css/fonts/icons',
//                destCss: 'assets/css/libs',
//                options: {
//                    stylesheet: 'scss',
//                    relativeFontPath: 'fonts/icons',
//                    hashes: false
//                    //htmlDemo: false
//                }
//            }
//        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
//    grunt.loadNpmTasks('grunt-contrib-concat');
//    grunt.loadNpmTasks('grunt-contrib-uglify');
//    grunt.loadNpmTasks('grunt-spritesmith');
//    grunt.loadNpmTasks('grunt-webfont');
//    grunt.loadNpmTasks('grunt-contrib-cssmin');
//    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Default task
    grunt.registerTask('build', [

    ]);
   
    grunt.registerTask('default', ['watch']);
};

