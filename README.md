
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/primeng.svg)](https://badge.fury.io/js/primeng)
[![Discord](https://img.shields.io/discord/557940238991753223.svg)](https://discord.gg/gzKFYnpmCY)
[![Build Status](https://travis-ci.org/primefaces/primeng.svg?branch=master)](https://travis-ci.org/primefaces/primeng)

[![PrimeNG Hero](https://www.primefaces.org/wp-content/uploads/2020/08/primeng-release-x-fix-2.jpg)](https://www.primefaces.org/primeng)

# This Fork
this fork fixes issues primeng team didn't have the time to fix yet and implement features they don't have time to implement and are not willing to accept PRs for due to company policy:

**Bug fixes:**
- ~~branch: `fix-7758` https://github.com/primefaces/primeng/issues/7758 `Calendar` should be able to read date from array of strings fixes~~ fixes has few problems ignoring for now
- ~~branch: `fix-7901` https://github.com/primefaces/primeng/issues/7901 `FileUpload` initial files preview is not working~~ fixed in 8.0.2
- branch: `fix-6736` https://github.com/primefaces/primeng/issues/6736 `Table` checkbox header does not select/unselect disabled rows or rows without checkbox.
- ~~branch: `fix-7970` https://github.com/primefaces/primeng/issues/7970 `Dropdown` disabled dropdown tries detected changes on destroyed dropdown (ViewDestroyedError).~~

**Features:**
- ~~branch: `optionValue` much requested feature that add the Ability to define optionValue in components like Dropdown~~ merged in branch selectLazy
- ~~branch: `fix-8091` https://github.com/primefaces/primeng/issues/8091 `Table` onEditComplete/Cancel prevents default but doesn't emit the event with data~~
- branch: `selectLazy` added feature Lazy loading for filter options in dropdown, multiselect (+ branch `optionValue`)

From time to time, all the NOT ~~crossed~~ branches are rebased on top of ~~origin~~ upstream master then force pushed to be up to date with latest primeng features (we rebase on top of upstream instead of origin in order to not include this readme and be able to pull request hopping for primeng to accept minor changes)

Branch `all-fixes` is then reset to origin/master state and all of them a re merged

Once this is done, primeng is packaged
```
npm run build-lib
cd dist
npm pack
``` 

then uploaded to https://github.com/yelhouti/primeng/releases

Version matches original primeng version without the fixes

### Website

Visit the [PrimeNG Website](https://www.primefaces.org/primeng/) for general information, demos and documentation.
