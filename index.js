const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com');
  //await page.waitForNavigation()
  await page.waitForSelector('.gLFyf')
  await page.type('.gLFyf', 'pechugas')
  await page.screenshot({path: 'example.png'});

  await browser.close();
  console.log('the end')
})();