package main

import (
	"fmt"
	"math"
)

func main() {
	const filename = "test.txt"
	const a, b = 3, 4
	var c int

	c = int(math.Sqrt(a*a + b*b))

	fmt.Println(filename, c)
}
