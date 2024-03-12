function foo() { };
const bar = { a: 'a' };
Object
	.setPrototypeOf(
		foo.prototype,
		bar
	);
const baz = Object.create(foo.prototype);
console.log('baz instanceof foo: ', baz instanceof foo);