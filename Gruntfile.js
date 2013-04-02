module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
		        banner: '/*! <%= pkg.name %> <%= grunt.template.today() %> */\n'
		    },
      		build: {
        		src: ['js/lib/*.js', 'js/weather.js', 'js/numfader.js', 'js/nouns.js', 'js/main.js', 'js/*.js'],
				dest: 'js/prod/script.min.js'
			},
		},
		jshint: {
      		files: 'js/*.js',
      		options: {
				// Define globals exposed by modern browsers.
				"browser": true,
				// Define globals exposed by jQuery.
				"jquery": true,
				// Define globals exposed by Node.js.
				"node": true,
				// Force all variable names to use either camelCase style or UPPER_CASE
				// with underscores.
				"camelcase": false,
				// Prohibit use of == and != in favor of === and !==.
				"eqeqeq": false,
				// Suppress warnings about == null comparisons.
				"eqnull": true,
				// Prohibit use of a variable before it is defined.
				"latedef": true,
				// Require capitalized names for constructor functions.
				"newcap": true,
				// Enforce use of single quotation marks for strings.
				"quotmark": "single",
				// Prohibit trailing whitespace.
				"trailing": true,
				// Prohibit use of explicitly undeclared variables.
				"undef": true,
				// Warn when variables are defined but never used.
				"unused": true,
				"force": true
			}
		},
		qunit: {
	    all: ['js/test/test.html']
	  },
		watch: {
			files: ['js/lib/*.js', 'js/*.js', 'js/test/tests.js'],
			tasks: ['uglify:build', 'jshint']
		}
	});
 
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');

	grunt.registerTask('default', ['watch']);
};



