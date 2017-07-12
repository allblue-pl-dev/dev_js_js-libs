'use stirct';

const abWatcher = require('ab-watcher');
const jsLibs = require('js-libs');


let w = abWatcher.new();
w.on([ 'add', 'change', 'unlink' ], (event_type) => {
    console.log(event_type);
});
w.update('./lib/*.js');
