package main

import (
	"fmt"
	"math"
	"reflect"
	"runtime"
)

func eval(o1, o2 int, o string) (int, error) {
	switch o {
	case "+":
		return o1 + o2, nil
	case "-":
		return o1 - o2, nil
	case "*":
		return o1 * o2, nil
	case "/":
		return o1 / o2, nil
	case "%":
		return o1 % o2, nil
	default:
		return 0, fmt.Errorf("wrong operation: %s", o)
	}
}

// 函数式编程
func evalFunctional(o func(int, int) int, o1, o2 int) int {
	pointer := reflect.ValueOf(o).Pointer()
	operationName := runtime.FuncForPC(pointer).Name()
	fmt.Println("operationName", operationName)

	return o(o1, o2)
}

func pow(o1, o2 int) int {
	return int(math.Pow(float64(o1), float64(o2)))
}

// 返回两个值
func div(a, b int) (q, r int) {
	// return a / b, a % b   ---> 更推荐的写法
	q = a / b
	r = a % b
	return
}

// 可变参数列表
func sum(numbers ...int) int {
	total := 0

	for i := range numbers {
		total += numbers[i]
	}

	return total
}

func main() {
	if result, err := eval(1, 2, "x"); err != nil {
		fmt.Println("Error meeting: ", err)
	} else {
		fmt.Println(result)
	}

	q, r := div(13, 4)
	a, _ := div(13, 4)
	fmt.Println(q, r)
	fmt.Println(a)
	fmt.Println(div(13, 4))

	fmt.Println(evalFunctional(pow, 2, 3))

	fmt.Println(sum(1, 2, 3))
	fmt.Println(sum(10, 20, 30))
}
