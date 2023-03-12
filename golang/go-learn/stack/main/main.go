package main

import (
	"fmt"
	"go-learn/stack"
)

type myStack struct {
	myStack *stack.Stack
}

func (ms *myStack) Pop() int {
	tail := (*ms.myStack)[len(*ms.myStack)-1]
	*ms.myStack = (*ms.myStack)[0 : len(*ms.myStack)-1]
	return tail
}

func main() {
	s := stack.Stack{1, 2, 3, 4}
	ms := myStack{&s}
	fmt.Println(ms.Pop()) // 4
	fmt.Println(ms.Pop()) // 3
	ms.myStack.Push(5)
	fmt.Println(ms.myStack.IsEmpty()) // false
	fmt.Println(ms.Pop())             // 5
	fmt.Println(ms.Pop())             // 2
	fmt.Println(ms.Pop())             // 1
	fmt.Println(ms.myStack.IsEmpty()) // true
}
