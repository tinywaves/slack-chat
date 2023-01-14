package main

import "fmt"

var p = 10
var (
	aa = 10
	bb = "true"
)

//g := 20   wrong

func variablesZeroValue() {
	var a int
	var b string

	fmt.Printf("%d %q\n", a, b)
}

func variablesValue() {
	var a, b int = 10, 20
	var c string = "string"

	fmt.Println(a, b, c)
}

func variablesTypeDeduction() {
	var a, b = 10, "true"
	var c = "string"

	fmt.Println(a, b, c)
}

func variablesShorter() {
	a, b := 10, "string"

	fmt.Println(a, b)
}

func main() {
	fmt.Println("Hello World", p, aa, bb)

	variablesZeroValue()
	variablesValue()
	variablesTypeDeduction()
	variablesShorter()
}
