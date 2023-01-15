package main

import (
	"04_deferAndError/fib"
	"bufio"
	"fmt"
	"os"
)

func tryDefer() {
	// 调用栈，因此先执行2后再执行1，defer确保在函数执行结束后执行
	defer fmt.Println(1)
	defer fmt.Println(2)
	fmt.Println(3)
}

func deferValue() {
	for i := 0; i < 100; i++ {
		// defer的值是在语句执行时进行计算
		defer fmt.Println(i)
		if i > 30 {
			panic("print too many")
		}
	}
}

func writeFile(filename string) {
	file, err := os.Create(filename)
	if err != nil {
		panic(err)
	}
	defer file.Close()

	f := fib.Fib()
	writer := bufio.NewWriter(file)
	defer writer.Flush()
	for i := 0; i < 20; i++ {
		fmt.Fprintln(writer, f())
	}
}

func writeFileError(filename string) {
	file, err := os.OpenFile(filename, os.O_EXCL|os.O_CREATE, 0666)
	if err != nil {
		if pathError, ok := err.(*os.PathError); !ok {
			panic(err)
		} else {
			fmt.Printf("%s, %s, %s", pathError.Op, pathError.Path, pathError.Err)
		}
		return
	}
	defer file.Close()

	f := fib.Fib()
	writer := bufio.NewWriter(file)
	defer writer.Flush()
	for i := 0; i < 20; i++ {
		fmt.Fprintln(writer, f())
	}
}

func main() {
	// tryDefer()
	// writeFile("fib.txt")
	// deferValue()
	writeFileError("fib.txt")
}
