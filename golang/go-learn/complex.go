package main

import (
	"fmt"
	"math"
	"math/cmplx"
)

func euler() {
	c := 3 + 4i
	fmt.Println(cmplx.Abs(c))                      // +5.000000e+000
	fmt.Println(cmplx.Pow(math.E, 1i*math.Pi) + 1) // (+0.000000e+000+1.224647e-016i)
	fmt.Println(cmplx.Exp(1i*math.Pi) + 1)         // (+0.000000e+000+1.224647e-016i)
	// 取前三位小数
	fmt.Printf("%.3f", cmplx.Exp(1i*math.Pi)+1) // (0.000+0.000i)
}

func triangle() {
	var a, b int = 3, 4
	var c int
	c = int(math.Sqrt(float64(a*a) + float64(b*b)))
	fmt.Println(c) // 5
}

func main() {
	euler()
	triangle()
}
