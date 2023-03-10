package main

import "fmt"

func printSliceData(s []int) {
	fmt.Printf("length = %d, capacity = %d\n", len(s), cap(s))
}

func main() {
	// create slice
	var s1 []int
	fmt.Println(s1) // []
	s2 := []int{2, 4, 6, 8, 10}
	s3 := make([]int, 16)
	s4 := make([]int, 10, 32)
	printSliceData(s2) // length = 5, capacity = 5
	printSliceData(s3) // length = 16, capacity = 16
	printSliceData(s4) // length = 10, capacity = 32

	// append
	for i := 0; i < 100; i++ {
		printSliceData(s1)
		s1 = append(s1, 2*i+1) // capacity 的扩大按照指数增长
	}

	// copy
	fmt.Println(s2)    // [2 4 6 8 10]
	printSliceData(s2) // length = 5, capacity = 5
	copy(s2, s1)
	fmt.Println(s2)    // [1 3 5 7 9]
	printSliceData(s2) // length = 5, capacity = 5

	// remove the middle
	s2 = append(s2[:2], s2[3:]...)
	fmt.Println(s2)    // [1 3 7 9]
	printSliceData(s2) // length = 4, capacity = 5
	// remove the header
	header := s2[0]
	s2 = s2[1:]
	fmt.Println(header, s2) // 1 [3 7 9]
	printSliceData(s2)      // length = 3, capacity = 4
	// remove the final
	final := s2[len(s2)-1]
	s2 = s2[:len(s2)-1]
	fmt.Println(final, s2) // 9 [3 7]
	printSliceData(s2)     // length = 2, capacity = 4
}
