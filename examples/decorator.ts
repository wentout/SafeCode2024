import { define, apply } from 'mnemonica';

debugger;

function defined(parentClass?: unknown) {
	const decorator = function<T extends { new(): unknown }>(cstr: T, s: ClassDecoratorContext<T>): T {
		if (parentClass instanceof Object) {
			// @ts-ignore
			return parentClass.define(s.name, cstr) as unknown as typeof cstr;
		}
		return define(s.name, cstr) as unknown as typeof cstr;
	};
	return decorator;
};

@defined()
class MyClass {
	z: number;
	constructor() {
		this.z = 123;
	}
}

@defined(MyClass)
class SubClass {
	sub: number;
	constructor() {
		this.sub = 321;
	}
}

debugger;

const myInstance = new MyClass;
console.log('myInstance', myInstance);				// { z: 123 }
console.log('myInstance.z', myInstance.z);			// 123

debugger;

const subInstance = apply(myInstance, SubClass);
console.log('subInstance', subInstance);			// { sub: 321 }
console.log('subInstance.z', subInstance.z);		// 123
console.log('subInstance.sub', subInstance.sub);	// 321

debugger;