package main

import (
	"fmt"
	"go-learn/stack"
)

type myStack struct {
	*stack.Stack
}

func (ms *myStack) Pop() int {
	tail := (*ms.Stack)[len(*(ms.Stack))-1]
	*ms.Stack = (*ms.Stack)[0 : len(*ms.Stack)-1]
	return tail
}

func main() {
	ms := myStack{&stack.Stack{1, 2, 3, 4}}
	fmt.Println(ms.Pop()) // 4
	fmt.Println(ms.Pop()) // 3
	ms.Push(5)
	fmt.Println(ms.IsEmpty()) // false
	fmt.Println(ms.Pop())     // 5
	fmt.Println(ms.Pop())     // 2
	fmt.Println(ms.Pop())     // 1
	fmt.Println(ms.IsEmpty()) // true
}
