package main

import (
	"fmt"
	"reflect"
	"runtime"
	"strconv"
)

// func eval(a, b int, op string) (string, int) {
// 	return strconv.Itoa(a) + strconv.Itoa(b) + op, len(op)
// }

// 另一种写法，但是上面那种更推荐
func eval(a, b int, op string) (q string, r int) {
	q = strconv.Itoa(a) + strconv.Itoa(b) + op
	r = len(op)
	return
}

func apply(f func(int, int) int, a, b int) int {
	// 获取 f 的函数名
	pointer := reflect.ValueOf(f).Pointer()
	fName := runtime.FuncForPC(pointer)
	fmt.Println(fName) // &{{}}
	return f(a, b)
}

func sum(numbers ...int) int {
	s := 0
	for i := range numbers {
		s += numbers[i]
	}
	return s
}

func main() {
	fmt.Println(eval(1, 3, "++")) // 13++ 2

	i := apply(func(i1 int, i2 int) int {
		fmt.Println(i1, i2) // 1 2
		return i1 + i2
	}, 1, 2)
	fmt.Println(i) // 3

	fmt.Println(sum(1, 2, 3, 5)) // 11
}
