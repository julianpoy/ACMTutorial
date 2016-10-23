# ACM Angular Tutorial

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Pre Requisites

You'll need [NPM](https://www.npmjs.com/) installed.

Then, using NPM, you'll need to run the following: (if you're on Linux or OSX, you'll need to preface this with `sudo`)

`npm install -g yo generator-angular generator-karma grunt bower`

## Getting Started

Yeoman is a handy tool that allows us to get all of the boilerplate work out of the way. It gives us a basic website to work from.
The NPM command you ran above installed yeoman (yo), as well as the Angular1 Generator.

You can now use yo to generate a website for you and get you started for Angular 1. To do this, you would run `yo angular`, however I've already done this to save time.
This repository contains the results of `yo angular`.

Thus, to get started, clone the repository and run the following commands in the project directory:

`npm install` and `bower install`

These commands get all of the dependencies of your project installed. Every time you clone the project, you'll need to run these commands.

Now that you've installed all of the dependencies, it's time for us to start it! Run `grunt serve`

This will start a server running on your local machine. It should automatically open your browser to the homepage of the newly generated site.

## Build & development

To build the project into a distributable (minimized and compressed) that can be uploaded to a webserver, run `grunt build`

This will put the output files in the `dist` folder.
