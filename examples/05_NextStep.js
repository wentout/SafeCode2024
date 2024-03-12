'use strict';

const BasePrototype = require('typeomatica');

debugger;

class Base extends BasePrototype {
    constructor() {
        super();

        try {

            debugger;
            this.myMethod = function () { };

        } catch (error) {

            debugger;
            console.error(error);

        }
    }
};

class ExtendedBase extends Base {
    constructor() {
        super();

        try {

            debugger;
            this.otherMethod = function () { };

        } catch (error) {

            debugger;
            console.error(error);

        }
    }
}

debugger;

const extendedInstance = new ExtendedBase;

debugger;



// !!! But I NEED METHODS


class MethodsBase extends BasePrototype({
    nonConfigurableValue: 'aha!',
    myMethod() {
        debugger;

        console.log(this.nonConfigurableValue);
        debugger;

        console.log(this.someValue);
        debugger;

    }
}) {
    constructor() {
        super();
        this.someValue = 'example';
    }
};

const instanceWithMethods = new MethodsBase;
debugger;

instanceWithMethods.myMethod();
debugger;


// And the Network IS ...


class NetworkBase extends BasePrototype(instanceWithMethods) {
    constructor() {
        super();
        this.networkValue = 'example';
    }
};

const networkInstance = new NetworkBase;

debugger;

console.log(networkInstance.networkValue);
debugger;

try {
    console.log(networkInstance.someValue);
} catch (error) {
    debugger;
    // restricted, as value of the other object
    console.error(error);
}

console.log(networkInstance.nonConfigurableValue);
debugger;

try {
    debugger;
    networkInstance.myMethod();
} catch (error) {
    debugger;
    // something may be restricted also
    console.error(error);
}
