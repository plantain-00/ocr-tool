# ocr-tool

A ocr tool powered by tesseract.js.

[![Dependency Status](https://david-dm.org/plantain-00/ocr-tool.svg)](https://david-dm.org/plantain-00/ocr-tool)
[![devDependency Status](https://david-dm.org/plantain-00/ocr-tool/dev-status.svg)](https://david-dm.org/plantain-00/ocr-tool#info=devDependencies)
[![Build Status: Linux](https://travis-ci.org/plantain-00/ocr-tool.svg?branch=master)](https://travis-ci.org/plantain-00/ocr-tool)
[![Build Status: Windows](https://ci.appveyor.com/api/projects/status/github/plantain-00/ocr-tool?branch=master&svg=true)](https://ci.appveyor.com/project/plantain-00/ocr-tool/branch/master)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fplantain-00%2Focr-tool%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/ocr-tool)

## install

```bash
git clone https://github.com/plantain-00/ocr-tool-release.git . --depth=1 && yarn add --production
node dist index.js -p 9444
```

then open <http://localhost:9444>

## docker

```bash
docker run -d -p 9444:9444 plantain-00/ocr-tool
```
