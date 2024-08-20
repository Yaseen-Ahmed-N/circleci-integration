
const path = require('path');

module.exports = function (config) {
    console.log('Loading Karma configuration...');
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma'),
            require('karma-junit-reporter') // Ensure this line is present
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: path.join(__dirname, './coverage/my-angular-project'),
            reports: ['html', 'lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true
        },
        reporters: ['progress', 'kjhtml', 'junit'], // Add 'junit' reporter
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: true, // Change to true to run tests once and exit
        restartOnFileChange: true,
        junitReporter: {
            outputDir: path.join(__dirname, 'test-results'), // Use an absolute path
            outputFile: 'junit.xml',
            useBrowserName: false // add browser name to report and classes names
        }
    });
};




