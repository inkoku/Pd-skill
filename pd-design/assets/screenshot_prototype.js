#!/usr/bin/env node
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function takeScreenshots(htmlPath, outputDir) {
    try {
        require.resolve('puppeteer');
    } catch (e) {
        console.error('错误: 请先安装 puppeteer: npm install puppeteer');
        process.exit(1);
    }

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    const fileUrl = `file://${path.resolve(htmlPath)}`;
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    const screenshotPath = path.join(outputDir, 'prototype-full.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`已保存全页截图: ${screenshotPath}`);

    await browser.close();
}

function main() {
    const args = process.argv.slice(2);
    const htmlPath = args[args.indexOf('--html') + 1];
    const outputDir = args[args.indexOf('--output') + 1];

    if (!htmlPath || !outputDir) {
        console.error('用法: node screenshot_prototype.js --html <html文件> --output <输出目录>');
        process.exit(1);
    }

    takeScreenshots(htmlPath, outputDir);
}

main();