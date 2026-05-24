# SauceDemo Playwright POM Framework

Page Object Model (POM) framework using Playwright for testing [SauceDemo](https://www.saucedemo.com).

## Folder Structure

```
Pages1/
├── tests/           # Test spec files
├── pages/           # Page Object classes
├── fixtures/        # Test data
├── utils/           # Utility functions
├── screenshots/     # Screenshot output
├── reports/         # HTML test reports
├── playwright.config.js
├── package.json
└── README.md
```

## Prerequisites

- Node.js 16+
- npm

## Setup

```bash
npm install
```

## Running Tests

```bash
npm test                  # Run all tests headless
npm run test:headed       # Run with browser visible
npm run test:chromium     # Chromium only
npm run test:firefox      # Firefox only
npm run test:webkit       # WebKit only
npm run test:debug        # Run in debug mode
```

## View Reports

```bash
npm run report
```
