var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('Example 1');
for (var i = 0, len = arr.length; i < len; i++) {
	console.log(i, arr[i]);
}

console.log('Example 2');
for (var key in arr) {
	console.log(key, arr[key]);
}

console.log('Example 3');
console.log(arr[6]);