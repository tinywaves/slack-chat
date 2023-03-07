package main

import (
	"fmt"
	"os"
)

func ifBranch() {
	const filename = "test.txt"

	// 读取文件
	bytes, err := os.ReadFile(filename)
	if err != nil {
		fmt.Println(err) // open test.txt: no such file or directory
	} else {
		fmt.Printf("%s\n", bytes) // abcdefg
	}

	// if 的条件可以赋值，然后再进行判断，作用域仅在条件作用域内
	if contents, err := os.ReadFile(filename); err != nil {
		fmt.Println(err) // open test.txt: no such file or directory
	} else {
		fmt.Printf("%s\n", contents) // abcdefg
	}
}

func switchBranch(score int) string {
	// switch 会默认 break，除非使用 fallthrough
	g := ""
	switch {
	// switch 后面可以没有表达式，可以在 case 后进行表达式判断
	case score < 60:
		g = "no"
	case score == 60:
		g = "equal"
	case score > 0:
		g = "yes"
	}
	return g
}

func main() {
	ifBranch()
	fmt.Println(switchBranch(100)) // yes
}
