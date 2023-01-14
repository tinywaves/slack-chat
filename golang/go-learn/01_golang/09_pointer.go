package main

import "fmt"

// Go 只有值传递，引用传递通过指针实现

func swap(a, b int) {
	a, b = b, a
}

func swapPointer(a, b *int) {
	*a, *b = *b, *a
}

// 更推荐的写法
func swapOther(a, b int) (int, int) {
	return b, a
}

func main() {
	a, b := 3, 4
	swap(a, b)
	fmt.Println(a, b)
	swapPointer(&a, &b)
	fmt.Println(a, b)

	c, d := 10, 20
	c, d = swapOther(c, d)
	fmt.Println(c, d)
}
