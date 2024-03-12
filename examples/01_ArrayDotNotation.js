class MyArray {
	constructor (...args) {
		const pre = new Array(...args);
		Object.setPrototypeOf(this, new Proxy(pre, {
			get (target, prop) {
				prop = prop.replace('_', '');
				return pre [ prop ];
			}
		}));
	}
}

const myArray = new MyArray(1, 2, 3);
console.log(myArray._0);

