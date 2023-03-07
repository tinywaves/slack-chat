package main

import "fmt"

// var 定义可以定义函数变量或者包内变量，一个作用域在函数内，一个作用域在包内
var aa int

func main() {
	// 使用 var 定义变量
	var a, b, c bool
	// 赋值
	var d, e string = "tiny", "ripple"
	// 可以使用 var 集中定义变量
	var (
		f int    = 10
		g string = "zhengdonghui"
	)
	// 可以使用自动推动类型
	var h = 10
	var i = "true"
	var j, k = 10, "false"
	// 使用 := 定义变量（更常用）
	l, m := "false", 100

	// false false false tiny ripple 10 zhengdonghui 10 true 10 false false 100 0
	fmt.Println(a, b, c, d, e, f, g, h, i, j, k, l, m, aa)
}
