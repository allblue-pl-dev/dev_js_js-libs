'use babel'

const Watcher = require('ab-watcher').Watcher;


let w = new Watcher();
w.on([ 'add' ], (file_path) => {
    console.log(file_path);
});
w.update('./js-lib/*.js');
console.log(w.getFilePaths());
