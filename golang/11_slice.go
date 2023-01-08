package main

import "fmt"

func updateSlice(s []int) {
	s[0] = 100
}

func main() {
	array := [...]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
	fmt.Println("array[2:6] = ", array[2:6])
	fmt.Println("array[:6] = ", array[:6])
	fmt.Println("array[2:] = ", array[2:])
	fmt.Println("array[:] = ", array[:])

	// 切片本身没有数据，而是数组的一个视图(view)
	fmt.Println(array)
	updateSlice(array[:])
	fmt.Println(array)

	// re-slice
	arraySlice := [...]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
	s := arraySlice[:]
	s = s[:5]
	s = s[2:]
	fmt.Println(s)

	fmt.Println("==========")

	// extending slice   slice 可以向后扩展，不可以向前扩展
	extendingSlice := [...]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
	es1 := extendingSlice[0:2]
	es2 := es1[:5]
	fmt.Printf("es1=%v   len(es1)=%d   cap(es1)=%d\n", es1, len(es1), cap(es1))
	fmt.Printf("es2=%v   len(es2)=%d   cap(es2)=%d\n", es2, len(es2), cap(es2))
}
