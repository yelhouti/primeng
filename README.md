
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Join the chat at https://gitter.im/primefaces/primeng](https://badges.gitter.im/primefaces/primeng.svg)](https://gitter.im/primefaces/primeng?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm version](https://badge.fury.io/js/primeng.svg)](https://badge.fury.io/js/primeng)
[![Build Status](https://travis-ci.org/primefaces/primeng.svg?branch=master)](https://travis-ci.org/primefaces/primeng)

#This For
k
this fork fixes issues primeng team didn't have the time to fix yet and implement features they don't have time to implement and are not willing to accept PRs for due to company policy:

**Bug fixes:**
- ~~branch: `fix-7758` https://github.com/primefaces/primeng/issues/7758 `Calendar` should be able to read date from array of strings fixes~~ fixes has few problems ignoring for now
- ~~branch: `fix-7901` https://github.com/primefaces/primeng/issues/7901 `FileUpload` initial files preview is not working~~ fixed in 8.0.2
- branch: `fix-6736` https://github.com/primefaces/primeng/issues/6736 `Table` checkbox header does not select/unselect disabled rows or rows without checkbox.
- branch: `fix-7970` https://github.com/primefaces/primeng/issues/7970 `Dropdown` disabled dropdown tries detected changes on destroyed dropdown (ViewDestroyedError).

**Features:**
- ~~branch: `optionValue` much requested feature that add the Ability to define optionValue in components like Dropdown~~ merged in branch selectLazy
- ~~branch: `fix-8091` https://github.com/primefaces/primeng/issues/8091 `Table` onEditComplete/Cancel prevents default but doesn't emit the event with data~~
- branch: `selectLazy` added feature Lazy loading for filter options in dropdown, multiselect (+ branch `optionValue`)

From time to time, all the NOT ~~crossed~~ branches are rebased on top of ~~origin~~ upstream master then force pushed to be up to date with latest primeng features (we rebase on top of upstream instead of origin in order to not include this readme and be able to pull request hopping for primeng to accept minor changes)

Branch `all-fixes` is then reset to origin/master state and all of them a re merged

Once this is done, primeng is packaged and uploaded to https://github.com/yelhouti/primeng/releases

Version matches original primeng version without the fixes

# PrimeNG

UI Components for Angular

See [PrimeNG homepage](http://www.primefaces.org/primeng) for live showcase and documentation.

[![PrimeNG Logo](https://www.primefaces.org/wp-content/uploads/2018/05/primeng-sidebar.svg "PrimeNG")](https://www.primefaces.org/primeng)

PrimeNG is a collection of rich UI components for Angular. All widgets are open source and free to use under MIT License. PrimeNG is developed by [PrimeTek Informatics](http://www.primetek.com.tr), a vendor with years of expertise in developing open source UI solutions. For project news and updates, please follow us on [twitter](https://twitter.com/prime_ng) and visit our [blog](https://www.primefaces.org/blog).

 - **80+ Components:** The most complete set of native widgets featuring 80+
   easy to use components for all your UI requirements.

- **Open Source:** Hosted at GitHub, all widgets are open source and free to use under MIT license. Feel the power of open source.

- **Productivity:** Allocate your valuable time on business logic rather than dealing with the complex user interface requirements.

- **Themes:** Don't get tied up in just one look&feel. Choose from a variety of options including material and flat design.

- **Templates:** Professionally designed highly customizable native Angular CLI application templates to get started in no time.

- **Mobile:** Enhanced mobile user experience with touch optimized responsive design elements.

---

#### Download

PrimeNG is available at NPM, if you have an existing application run the following command to download it to your project.

```
npm install primeng --save
npm install primeicons --save
```

#### Angular CLI Integration

Add PrimeNG and PrimeIcons as a dependencies.

```
"dependencies": {
  //...
  "primeng": "^7.0.0",
  "primeicons": "^1.0.0"
},
```

Configure required styles at the styles section, example below uses the Nova Light theme.

```
"styles": [
  "node_modules/primeng/resources/themes/nova-light/theme.css",
  "node_modules/primeng/resources/primeng.min.css",
  "node_modules/primeicons/primeicons.css",
  //...
],
```

That is all, you may now import PrimeNG components, for a working example visit the [PrimeNG CLI QuickStart sample](https://github.com/primefaces/primeng-quickstart-cli) at GitHub.
