package main

import (
	"fmt"
	"math"
)

func main() {
	const filename string = "tinyRipple.txt"
	const aa, bb = 3, 4 // 不指定类型时常量的类型是不确定的，可作为各种类型使用
	var c int = int(math.Sqrt(aa*aa + bb*bb))
	fmt.Println(filename, c) // tinyRipple.txt 5

	// Go 中没有特殊的枚举关键字，使用 const 来定义枚举
	// const (
	// 	cpp        = 0
	// 	java       = 1
	// 	golang     = 2
	// 	python     = 3
	// 	javascript = 4
	// )
	// fmt.Println(cpp, java, golang, python, javascript) // 0 1 2 3 4
	const (
		cpp = iota // 自增值
		_
		javascript
		golang
		python
	)
	fmt.Println(cpp, javascript, golang, python) // 0 2 3 4

	const (
		b = 1 << (10 * iota)
		kb
		mb
		gb
		tb
		pb
	)
	fmt.Println(b, kb, mb, gb, tb, pb) // 1 1024 1048576 1073741824 1099511627776 1125899906842624
}
