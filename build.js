'use strict';

const fs = require('fs');
const path = require('path');

const jsLibs = require('js-libs');


function get_header(file_paths)
{
    let header = '';

    for (let i = 0; i < file_paths.length; i++) {
        header += '<script type="text/javascript" src="' +
                path.relative(__dirname, file_paths[i]).replace(/\\/g, '/') +
                '"></script>';
    }

    return header;
}

jsLibs.build('test-lib', path.join(__dirname, 'js-lib'),
        path.join(__dirname, '/js-lib_test'), (err, file_paths) => {
    if (err !== null)
        throw err;

    fs.readFile(path.join(__dirname, 'test.dev.html'), 'utf-8', (err, data) => {
        if (err !== null)
            throw err;

        let replaced_data = data.replace(/\{\{header\}\}/g, get_header(file_paths));
        fs.writeFile(path.join(__dirname, 'test.html'), replaced_data, 'utf-8',
                (err) => {
            if (err !== null)
                throw err;

            console.log('Success.');
        });
    });
});
