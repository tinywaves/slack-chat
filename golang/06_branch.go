package main

import (
	"fmt"
	"os"
)

func getGrade(score int) string {
	grade := ""

	switch {
	case score < 0 || score > 100:
		panic(fmt.Sprintf("Wrong Score: %d", score))
	case score < 60:
		grade = "F"
	case score < 80:
		grade = "C"
	case score < 90:
		grade = "B"
	case score <= 100:
		grade = "A"
	}

	return grade
}

func main() {
	const filename = "test.txt"

	// 此时这个 contents 和 err 只能在 if 块范围内进行使用
	// if contents, err := ioutil.ReadFile(filename); err != nil {
	// 	fmt.Println(err)
	// } else {
	// 	fmt.Printf("%s\n", contents)
	// }

	contents, err := os.ReadFile(filename)

	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(string(contents))
	}

	fmt.Println(
		getGrade(0),
		getGrade(1),
		getGrade(100),
		getGrade(90),
		getGrade(80),
	)
}
