package main

import (
	"fmt"
	"unicode/utf8"
)

func main() {
	s := "tinyRipple微澜" // utf-8

	fmt.Println(len(s))

	for _, b := range []byte(s) {
		fmt.Printf("%X ", b)
	}
	fmt.Println()

	for i, ch := range s { // ch is a rune
		fmt.Printf("(%d, %X)", i, ch)
	}
	fmt.Println()

	fmt.Println("Rune count: ", utf8.RuneCountInString(s))

	bytes := []byte(s)
	for len(bytes) > 0 {
		decodeRune, size := utf8.DecodeRune(bytes)
		bytes = bytes[size:]
		fmt.Printf("%c ", decodeRune)
	}

	for i, ch := range []rune(s) {
		fmt.Printf("(%d, %c) ", i, ch)
	}
}
