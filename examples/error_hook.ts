import { apply } from 'mnemonica';
import { FirstType, SecondType, ThirdType } from './example_init';

export const ErroredType = ThirdType.define('ErroredType', function (this: {
	errored: 'ErroredType',
}) {
	this.errored = 'ErroredType';
	throw new Error('Special DEMO Error');
});

// ErroredType.registerHook('creationError', ({ existentInstance, inheritedInstance }) => {
// 	debugger;
// 	console.log('creationError')
// 	console.log(existentInstance, inheritedInstance);
// });

process.on('uncaughtException', (error) => {
	debugger;
	console.error('uncaughtException', error);
});

debugger;
const first = new FirstType('FirstType');
console.log(first instanceof FirstType);
debugger;
const second = apply(first, SecondType);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(second))) instanceof FirstType);
debugger;
const third = apply(second, ThirdType);
debugger;


new third.ErroredType;

