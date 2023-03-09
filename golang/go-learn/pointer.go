package main

import "fmt"

func swap1(pa, pb *int) {
	*pb, *pa = *pa, *pb
}

func swap2(a, b int) (int, int) {
	return b, a
}

func main() {
	a1, b1 := 3, 4
	swap1(&a1, &b1)
	fmt.Println(a1, b1) // 4 3

	a2, b2 := 10, 20
	i1, i2 := swap2(a2, b2)
	fmt.Println(i1, i2) // 20 10
}
