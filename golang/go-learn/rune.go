package main

import (
	"fmt"
	"unicode/utf8"
)

func main() {
	s := "hello, golang Go 语言" // 采用 UTF-8 编码，UTF-8 是一种可变长的编码方式，中文会占据三个字节，英文一个字节
	fmt.Println(len(s))        // 23

	// 68 65 6C 6C 6F 2C 20 67 6F 6C 61 6E 67 20 47 6F 20 E8 AF AD E8 A8 80
	for _, b := range []byte(s) {
		fmt.Printf("%X ", b)
	}
	fmt.Println()

	// (0 68)(1 65)(2 6C)(3 6C)(4 6F)(5 2C)(6 20)(7 67)(8 6F)(9 6C)(10 61)(11 6E)(12 67)(13 20)(14 47)(15 6F)(16 20)(17 8BED)(20 8A00)
	// ch is a rune
	for i, ch := range s {
		fmt.Printf("(%d %X)", i, ch)
	}
	fmt.Println()

	fmt.Println(utf8.RuneCountInString(s)) // 19

	bytes := []byte(s)
	for len(bytes) > 0 {
		decodeRune, size := utf8.DecodeRune(bytes)
		fmt.Printf("%c ", decodeRune) // h e l l o ,   g o l a n g   G o   语 言
		bytes = bytes[size:]
	}
	fmt.Println()

	// (0 h)(1 e)(2 l)(3 l)(4 o)(5 ,)(6  )(7 g)(8 o)(9 l)(10 a)(11 n)(12 g)(13  )(14 G)(15 o)(16  )(17 语)(18 言)
	for i, ch := range []rune(s) {
		fmt.Printf("(%d %c)", i, ch)
	}
}
