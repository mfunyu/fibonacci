'use strict';

/* O(n) ？　*/
// function fib(n){
// 	let prev = 0;
// 	let now = 1;
// 	let sum = 0;
// 	if (n == 1)
// 		sum = 1;
// 	for (let i = 2; i <= n; i++){
// 		sum = prev + now;
// 		prev = now;
// 		now = sum;
// 	}
// 	return sum;
// }

/* O(n^2) 指数オーダー　*/
// function fib(n){
// 	let prev = 0;
// 	let now = 1;
// 	let sum = 0;
// 	if (n == 0)
// 		return 0
// 	if (n == 1)
// 		return 1;
// 	else
// 		return fib(n - 1) + fib(n - 2)
// }

/* O(n): 線形オーダー　*/
let map = new Map();

map.set(0, 0);
map.set(1, 1);
function fib(n) {
	if (map.has(n))
		return map.get(n)
	let val = fib(n - 1) + fib(n - 2);
	map.set(n, val);
	return val;
}


const length = 40;
for (let i = 0; i <= length; i++) {
	console.log(fib(i));
}