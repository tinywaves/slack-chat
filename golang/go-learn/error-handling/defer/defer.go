package main

import "fmt"

// 3
// 2
// 1
func main() {
	for i := 0; i < 10; i++ {
		defer fmt.Println(i)
		if i == 5 {
			panic("Panic")
		}
	}

	defer fmt.Println(1)
	defer fmt.Println(2)
	fmt.Println(3)
	return
}
