package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

// 省略起始条件
func convertToBinary(number int) string {
	result := ""

	for ; number > 0; number /= 2 {
		lsb := number % 2
		result = strconv.Itoa(lsb) + result
	}

	return result
}

// 省略起始条件和递增条件
func readFile(filename string) {
	file, err := os.Open(filename)

	if err != nil {
		panic(err)
	}

	scanner := bufio.NewScanner(file)

	for scanner.Scan() {
		fmt.Println(scanner.Text())
	}
}

// 省略起始条件、递增条件和结束条件(死循环)
func forever() {
	for {
		fmt.Println("a")
	}
}

func main() {
	fmt.Println(
		convertToBinary(5),  // 101
		convertToBinary(13), // 1101
	)

	readFile("test.txt")
}
