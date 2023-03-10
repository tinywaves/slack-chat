package main

import "fmt"

func main() {
	array := [...]int{0, 1, 2, 3, 4, 5, 6, 7}

	s1 := array[2:6]
	s2 := s1[3:5]
	s3 := append(s2, 10)
	s4 := append(s3, 10)
	s5 := append(s4, 12)

	fmt.Println("s1 = ", s1)       // s1 =  [2 3 4 5]
	fmt.Println("s2 = ", s2)       // s2 =  [5 6]
	fmt.Println("s3 = ", s3)       // s3 =  [5 6 10]
	fmt.Println("s4 = ", s4)       // s4 =  [5 6 10 10]
	fmt.Println("s5 = ", s5)       // s5 =  [5 6 10 10 12]
	fmt.Println("array = ", array) // array =  [0 1 2 3 4 5 6 10]
}
