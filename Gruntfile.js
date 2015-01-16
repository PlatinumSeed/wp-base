module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        // Task configuration
        watch: {
            css: {
                files: ['assets/css/{,*/}*.{scss,sass}'],
                tasks: ['compass', 'copy:css', 'cssmin']
            },
            sprites: {
                files: ['assets/images/sprites/*.png'],
                tasks: ['sprite']
            },
            images: {
                files: ['assets/images/*.{png,jpg,gif}'],
                tasks: ['imagemin']
            },
            webfonts: {
                files: ['assets/images/icons/*.svg'],
                tasks: ['webfont']
            }
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
                    sassDir: 'assets/css',
                    cssDir: 'assets/css',
                    imagesDir: 'assets/images',
                    fontsDir: 'assets/css/fonts',
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
                    {expand: true, flatten: true, src: ['assets/css/screen.css'], dest: 'css'},
                    {expand: true, flatten: true, src: ['assets/css/screen.css.map'], dest: 'css'}
                ]
            }
        },
        sprite:{
            desktop: {
                src: 'assets/images/sprites/*.png',
                destImg: 'images/sprite.png',
                destCSS: 'assets/css/libs/_sprites.scss',
                imgPath: '../images/desktop_sprite.png',
                engine: 'pngsmith'
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: 'images'
                }]
            }
        },
        cssmin: {
            css: {
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css'],
                dest: 'css/',
                ext: '.min.css'
            }
        },
        webfont: {
            icons: {
                src: 'assets/images/icons/*.svg',
                dest: 'css/fonts/icons',
                destCss: 'assets/css/libs',
                options: {
                    stylesheet: 'scss',
                    relativeFontPath: 'fonts/icons',
                    hashes: false,
                    //htmlDemo: false,
                    destHtml: './'
                }
            }
        },
        wiredep: {
            task: {
                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'assets/usemin/usemin.html'
                ]
            }
        },
        useminPrepare: {
            html: 'assets/usemin/usemin.html',
            options: {
                dest: './'
            }
        },
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-wiredep');
//    grunt.loadNpmTasks('grunt-contrib-concat');
//    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('build', [
        'useminPrepare',
        'concat:generated',
        'uglify:generated',
        'cssmin:generated',
    ]);
   
    grunt.registerTask('default', ['watch']);
};

