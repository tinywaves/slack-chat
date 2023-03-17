package main

import "fmt"

func adder() func(int) int {
	sum := 10
	return func(i int) int {
		sum += i
		return sum
	}
}

func main() {
	f := adder()
	fmt.Println(f(100)) // 110
}
