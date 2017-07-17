jsLibs.exportModule('test-lib', 'MyClass', (require, module) => { 'use strict';


class MyClass {

    constructor()
    { let self = this;
        console.log('My Class created.');
    }

}

module.exports = MyClass;
 });