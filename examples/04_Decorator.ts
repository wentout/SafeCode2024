'use strict';

import { Strict } from 'typeomatica';

@Strict({ someProp: 123 })
class DecoratedByBase {
	someProp!: number;
}

let decoratedSomeProp = 0;

class ExtendedDecoratedByBase extends DecoratedByBase {
	someProp: number;
	constructor() {
		super();
		this.someProp = 321;
		decoratedSomeProp = this.someProp;
	}
}

const decorated = new DecoratedByBase;
const exdecorated = new ExtendedDecoratedByBase;


console.log(decorated instanceof DecoratedByBase);				// true
console.log(exdecorated instanceof DecoratedByBase);			// false, as should be
console.log(exdecorated instanceof ExtendedDecoratedByBase);	// true
console.log(decoratedSomeProp.valueOf() === 321);				// true
console.log(decoratedSomeProp.valueOf() === 321);				// true
console.log(exdecorated.someProp.valueOf() === 321);			// true


const ogp = Object.getPrototypeOf;
console.log(ogp(ogp(exdecorated)).someProp === 123);			// true


try {
	// @ts-ignore
    exdecorated.someProp = '123';
} catch (error) {
    debugger;
    console.error(error);
}