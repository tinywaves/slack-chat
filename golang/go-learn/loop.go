package main

import (
	"fmt"
	"strconv"
)

func binary(n int) {
	result := ""
	for ; n > 0; n /= 2 {
		result = strconv.Itoa(n%2) + result
	}
	fmt.Println(result)
}

func forever() {
	// 死循环
	for {
		fmt.Println("forever")
	}
}

func main() {
	sum := 0
	for i := 1; i <= 100; i++ {
		sum += i
	}
	fmt.Println(sum) // 5050

	binary(3)  // 11
	binary(10) // 1010
}
