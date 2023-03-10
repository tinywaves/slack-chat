package main

import "fmt"

func main() {
	array := [...]int{0, 1, 2, 3, 4, 5, 6, 7}
	s1 := array[2:6]
	s2 := s1[3:5]

	fmt.Printf("s1 = %v, length(s1) = %d, capacity(s1) = %d\n", s1, len(s1), cap(s1)) // s1 = [2 3 4 5], length(s1) = 4, capacity(s1) = 6
	fmt.Printf("s2 = %v, length(s2) = %d, capacity(s2) = %d\n", s2, len(s2), cap(s2)) // s2 = [5 6], length(s2) = 2, capacity(s2) = 3
}
