a2spikes
========

## angular 2, karma, traceur, kendo, and visualization spikes

this is a repository for spiking into angular 2, kendo, and visualization  --warning newbie alert :)

### Installation
```bash
# Clone this repo (or your fork).
git clone https://github.com/technicalmedia/a2spikes.git

# Install all the the dev dependencies, such as Karma, Gulp, etc.
npm install

# If you wanna use "karma" or "gulp" commands, install also:
npm install -g karma-cli
npm install -g gulp
```

### Running the [tests](./test/)
This will start Karma and Chrome (with `--harmony` enabled). Karma will watch the source code and run the tests anytime you save a change.

```bash
karma start
```

### Transpiling ES6
All the source code is written in the upcoming version of JavaScript - ES6. In order to use it in the current browsers you need to transpile the code into ES5 using [Traceur].


```bash
# Transpile ES6 into ./compiled/*
gulp build

# Watch all the sources and transpile on any change
gulp watch
```

### thanks di.js

many thanks to the good folks at http://www.github.com/angular/di.js after which this repo is modeled