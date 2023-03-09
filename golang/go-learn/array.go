package main

import "fmt"

func changeArray1(array [4]int) {
	// [5]int 是一个值类型，array 是外部传入的数组的一个拷贝，并且 [5]int 和 [6]int 是不同类型
	array[0] = 1000
}

func changeArray2(array *[4]int) {
	// 这里不需要使用 (*array)[0]，Go 中的指针很灵活
	array[0] = 1000
}

func main() {
	// 定义
	var arr1 [5]int               // 需要指定个数
	arr2 := [3]int{1, 3, 5}       // 使用 := 需要执行初始值
	arr3 := [...]int{2, 4, 6, 8}  // 使用 ... 表示让编译器自动推断数组的个数
	var grid [4][5]int            // 二维数组
	fmt.Println(arr1, arr2, arr3) // [0 0 0 0 0] [1 3 5] [2 4 6 8]
	fmt.Println(grid)             // [[0 0 0 0 0] [0 0 0 0 0] [0 0 0 0 0] [0 0 0 0 0]]

	// 遍历
	for i := 0; i < len(arr3); i++ {
		// 2
		// 4
		// 6
		// 8
		fmt.Println(arr3[i])
	}
	for i := range arr3 {
		// 2
		// 4
		// 6
		// 8
		fmt.Println(arr3[i])
	}
	for index, value := range arr3 {
		// 可以使用 _ 省略变量，在 Go 中通用
		// 0 2
		// 1 4
		// 2 6
		// 3 8
		fmt.Println(index, value)
	}

	fmt.Println(arr3) // [2 4 6 8]
	changeArray1(arr3)
	fmt.Println(arr3) // [2 4 6 8]
	fmt.Println(arr3) // [2 4 6 8]
	changeArray2(&arr3)
	fmt.Println(arr3) // [1000 4 6 8]
}
