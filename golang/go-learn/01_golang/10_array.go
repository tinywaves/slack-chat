package main

import "fmt"

func main() {
	var array1 [5]int
	array2 := [3]int{1, 3, 5}
	array3 := [...]int{2, 4, 6, 8, 10}
	var grid [2][3]int

	fmt.Println(array1, array2, array3, grid)

	for i := 0; i < len(array3); i++ {
		fmt.Println(array3[i])
	}

	for i, v := range array3 {
		fmt.Println(i, v)
	}

	// 数组是值类型
	// type [5]int is not equal to [3]int
}
