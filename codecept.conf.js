const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://yahoo.com',
      browser: process.env.BROWSER,
      // host: 'ae6beaa2b40d44f729304595cdb5de62-1023393259.ap-south-1.elb.amazonaws.com',
      host: process.env.WD_HOST,
      port: process.env.WD_PORT,
      path: '/wd/hub',
      desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox", "--start-maximized", "--disable-dev-shm-usage" ]
        }
    }
  }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs'
}