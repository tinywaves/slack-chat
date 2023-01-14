package main

import (
	"fmt"
	"golang/queue"
)

func main() {
	q := queue.Queue{1}

	fmt.Printf("%p\n", &q)

	q.Push(2)
	fmt.Println("push: ", q)
	pop := q.Pop()
	fmt.Println("pop: ", q, pop)
	isEmpty := q.IsEmpty()
	fmt.Println("isEmpty: ", isEmpty)
	fmt.Println(&q)

	fmt.Printf("%p\n", &q)
}
