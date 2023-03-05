module.exports = (config) => {
    //const coverage = config.singleRun ? ['coverage'] : [];
    process.env.CHROME_BIN = require('puppeteer').executablePath();
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage'),
            require('karma-junit-reporter'),
            require('karma-chrome-launcher'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false,
            jasmine: {
                random: false
            }
        },


        coverageReporter: {
            dir: require('path').join(__dirname, '../coverage'),
            subdir: '.',
            reporters: [
                {
                    type: 'html'
                },
                {
                    type: 'text-summary'
                },
                {
                    type: 'lcovonly'
                }
            ]
        },

        junitReporter: {
            outputDir: '../junit'
        },

        port: 9999,
        browsers: ['ChromeHeadlessNoSandbox'],
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox','--disable-gpu']
            }
        },
        singleRun: true,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        captureTimeout: 1000000,
        borowserDisconnectTolerance: 5,
        borowserDisconnectTimeout: 1000000,
        borowserNoActivityTimeout: 1000000
    });
};