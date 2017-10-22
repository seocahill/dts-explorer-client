/* eslint-env node */
module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  launch_in_ci: [
    'Chromium'
  ],
  launch_in_dev: [
    'Chromium'
  ],
  browser_args: {
    Chromium: [
      '--disable-gpu',
      '--headless',
      '--no-sandbox',
      '--remote-debugging-address=0.0.0.0',
      '--remote-debugging-port=9222',
      '--window-size=1440,900'
    ]
  }
};
