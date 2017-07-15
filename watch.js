'use stirct';

const fs = require('fs');

const abWatcher = require('ab-watcher');
const jsLibs = require('js-libs');


abWatcher.on([ './js-lib/*.js' ], [ 'add', 'change', 'unlink' ],
        (file_path, event_type) => {
    abLibs.build('test-lib', './js-lib', './js-lib_web', (html_header) => {
        fs.readFile('./test.html', 'utf-8', (err, data) => {
            if (err) {
                console.error('Cannot read `test.dev.html`.', err);
                return;
            }

            data = data.replace(/\{\{header\}\}/g, html_header);

            fs.writeFile('./test.html', data, 'utf-8', (err) => {
                if (err) {
                    console.error('Cannot write `test.html`.', err);
                    return;
                }
            });
        });
    });
});
