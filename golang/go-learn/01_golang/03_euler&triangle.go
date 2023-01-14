package main

import (
	"fmt"
	"math"
	"math/cmplx"
)

func euler() {
	fmt.Println(cmplx.Pow(math.E, 1i*math.Pi) + 1)
	fmt.Println(cmplx.Exp(1i*math.Pi) + 1)
	fmt.Printf("%.3f\n", cmplx.Exp(1i*math.Pi)+1)
}

func triangle() {
	var a, b = 3, 4
	var c int

	c = int(math.Sqrt(float64(a*a + b*b)))

	fmt.Println(c)
}

func main() {
	euler()
	triangle()
}
