// console.log(typeof null); // object
// console.log(typeof typeof null);  // string
// console.log(typeof typeof typeof null);  // string
// console.log(typeof console.log(1)); // 1 undefined

var name = '123';

var obj = {
	name: '456',
	print: function() {
		function a() {
			console.log(this.name);
		}
		a();
	}
}

obj.print();
