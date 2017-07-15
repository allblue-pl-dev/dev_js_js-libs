'use strict';

const MyClass = require('MyClass');


class TestLib
{

    get MyClass()
    {
        return MyClass;
    }

}

module.exports = TestLib;
