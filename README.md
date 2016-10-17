# Bärner JS Webpack talk

This is a litte demo setup for my talk at Bärner JS on 17.10.2016.

It shows a few tricks for using webpack in projects with lot's of vendor code:

* Webpack Dlls
* Separating Dev/Vendor/Production builds

## Scripts

```bash
# first things first
npm install

# build dev once
npm run build
# watch files for changes
npm run watch
# build vendor lib
npm run build-vendor
# build production file
npm run build-prod
```
