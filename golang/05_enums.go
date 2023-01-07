package main

import "fmt"

func main() {
	// enums
	// const (
	// 	javascript = 0
	// 	golang     = 1
	// 	cpp        = 2
	// 	java       = 3
	// )

	const (
		javascript = iota
		golang
		_
		java
	)

	const (
		b = 1 << (10 * iota)
		kb
		mb
		gb
		tb
		pb
	)

	fmt.Println(javascript, golang, java)
	fmt.Println(b, kb, mb, gb, tb, pb)
}
