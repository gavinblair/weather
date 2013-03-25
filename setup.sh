npm install grunt --save-dev;
npm install grunt-contrib-watch --save-dev;
npm install grunt-contrib-uglify --save-dev;
npm install grunt-contrib-jshint --save-dev;
npm install grunt-contrib-qunit --save-dev;
npm install qunitjs --save-dev;
mkdir --parents js/test;
mkdir --parents js/lib;
mkdir --parents js/prod;
cp node_modules/qunitjs/qunit/qunit.js js/test/qunit.js;
cp node_modules/qunitjs/qunit/qunit.css js/test/qunit.css;
cat <<EOF>js/test/test.html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>QUnit Example</title>
  <link rel="stylesheet" href="qunit.css">
</head>
<body>
  <div id="qunit"></div>
  <div id="qunit-fixture"></div>
  <script src="qunit.js"></script>
  <script src="tests.js"></script>
</body>
</html>
EOF
cat <<EOF>js/test/tests.js
	
QUnit.test( "hello test", function() {
  ok( 1 == "1", "QUnit is working!" );
});

EOF
npm init;
cat <<EOF>Gruntfile.js
module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today() %> */\n'
      },
      build: {
        src: ['js/lib/*.js', 'js/*.js'],
				dest: 'js/prod/script.min.js'
      }
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
			tasks: ['jshint','uglify:build', 'qunit']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');

	grunt.registerTask('default', ['watch']);
};



EOF
echo "You may now use grunt!"