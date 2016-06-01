# Design System / Style Guide Boilerplate

A very simple starter boilerplate for a front-end style guide. It uses [CodeMirror](https://codemirror.net/) for it's syntax highlighting, and comes with highlighting for CSS, Sass, HTML and JSX out of the box. (See footer.hmtl)

## Features

* CSS Autoprefixing
* Nunjucks templating
* CodeMirror editor-in-the-browser and syntax highlighting.
* Built-in preview server with BrowserSync
* Automagically compile Sass with [libsass](http://libsass.org)
* Automagically lint your scripts
* Map compiled CSS to source stylesheets with source maps
* Awesome image optimization
* Automagically wire-up dependencies installed with [Bower](http://bower.io)
* The gulpfile makes use of [ES2015 features](https://babeljs.io/docs/learn-es2015/) by using [Babel](https://babeljs.io)

## Getting Started

- Install dependencies: `npm install` & `bower install`
- Run `gulp serve` to preview and watch for changes
- Run `bower install --save <package>` to install frontend dependencies
- Run `gulp serve:test` to run the tests in the browser
- Run `gulp` to build for production
- Run `gulp serve:dist` to preview the production build

