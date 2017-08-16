Package.describe({
  name: 'ua-parser-js-amplitude',
  author: 'Faisal Salman <f@faisalman.com> (http://faisalman.com)',
  contributors: [
    'Daniel Jih'
  ],
  version: '0.7.10',
  summary: 'A fork of Amplitude\'s fork of faisalman\'s lightweight JavaScript-based user-agent string parser',
  git: 'https://github.com/Mixgenius/ua-parser-js.git',
  documentation: 'readme.md'
});

Package.onUse(function (api) {
  api.addFiles("src/ua-parser.js");
  api.export("UAParser");
});
