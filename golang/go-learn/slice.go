package main

import "fmt"

func updateSlice(s []int) {
	s[0] = 1000
}

func main() {
	// 在 Go 中一般不直接使用数组，而是使用切片
	array := [...]int{0, 1, 2, 3, 4, 5, 6, 7}

	fmt.Println("array[2:6]", array[2:6]) // array[2:6] [2 3 4 5]
	fmt.Println("array[2:]", array[2:])   // array[2:] [2 3 4 5 6 7]
	fmt.Println("array[:6]", array[:6])   // array[:6] [0 1 2 3 4 5]
	fmt.Println("array[:]", array[:])     // array[:] [0 1 2 3 4 5 6 7]

	// slice 是对 array 的一个 view，视图，所以修改 slice 也会修改 array
	s1 := array[3:5]
	fmt.Println(s1) // [3 4]
	updateSlice(s1)
	fmt.Println(s1)    // [1000 4]
	fmt.Println(array) // [0 1 2 1000 4 5 6 7]

	s2 := array[:]
	fmt.Println(s2) // [0 1 2 1000 4 5 6 7]
	updateSlice(s2)
	fmt.Println(s2)    // [1000 1 2 1000 4 5 6 7]
	fmt.Println(array) // [1000 1 2 1000 4 5 6 7]

	arr := [...]int{1, 2, 3}
	updateSlice(arr[:])
	fmt.Println(arr) // [1000 2 3]

	// Re-slice
	s2 = s2[:5]
	fmt.Println(s2) // [1000 1 2 1000 4]
	s2 = s2[2:]
	fmt.Println(s2) // [2 1000 4]
}
