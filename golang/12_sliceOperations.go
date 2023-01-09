package main

import "fmt"

func main() {
	// slice operations
	operationArray := [...]int{0, 1, 2, 3, 4, 5, 6, 7}
	oslice1 := operationArray[2:6] // [2, 3, 4, 5]
	oslice2 := oslice1[3:5]        // [5, 6]
	oslice3 := append(oslice2, 10)
	oslice4 := append(oslice3, 11)
	oslice5 := append(oslice4, 12)
	fmt.Println(oslice3, oslice4, oslice5, operationArray)
	// 此时 oslice4 和 oslice4 已经不是 operationArray 的 view，而是一个新拷贝出来的 array
	// 如果添加元素时超越了 cap，此时系统会重新分配更大的底层数组

	fmt.Println("=====create slice=====")
	var s []int // zero value for slice is nil
	for i := 0; i < 15; i++ {
		fmt.Printf("length=%d cap=%d\n", len(s), cap(s))
		s = append(s, 2*i+1)
	}
	fmt.Println(s)

	s1 := []int{2, 4, 6, 8}
	s2 := make([]int, 16)     // len=16
	s3 := make([]int, 10, 32) // len=10 cap=32
	fmt.Println(len(s1), cap(s1))
	fmt.Println(len(s2), cap(s2))
	fmt.Println(len(s3), cap(s3))

	fmt.Println("=====copy slice=====")
	copy(s2, s1)
	fmt.Println(s1, s2)

	fmt.Println("=====delete element for slice=====")
	// 删除 s2 的元素 8
	s2 = append(s2[:3], s2[4:]...)
	fmt.Println(s2)
	fmt.Println(len(s2), cap(s2))

	fmt.Println("=====pop and push=====")
	// pop front
	front := s2[0]
	s2 = s2[1:]
	// pop tail
	tail := s2[len(s2)-1]
	s2 = s2[:len(s2)-1]
	fmt.Println(front, tail)
}
