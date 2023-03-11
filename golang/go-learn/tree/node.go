package main

import "fmt"

type treeNode struct {
	value       int
	left, right *treeNode
}

func createTreeNode(value int) *treeNode {
	return &treeNode{value: value}
}

func (receiver *treeNode) print() {
	fmt.Println(receiver.value)
}

func (receiver *treeNode) setValue(newValue int) {
	receiver.value = newValue
}

func (receiver *treeNode) preOrderTraversal() {
	if receiver == nil {
		return
	}
	receiver.print()
	receiver.left.preOrderTraversal()
	receiver.right.preOrderTraversal()
}

func (receiver *treeNode) orderTraversal() {
	if receiver == nil {
		return
	}
	receiver.left.orderTraversal()
	receiver.print()
	receiver.right.orderTraversal()
}

func (receiver *treeNode) postOrderTraversal() {
	if receiver == nil {
		return
	}
	receiver.left.postOrderTraversal()
	receiver.right.postOrderTraversal()
	receiver.print()
}

func main() {
	var rootVar treeNode
	fmt.Println(rootVar) // {0 <nil> <nil>}

	root := treeNode{value: 3}
	root.left = &treeNode{}
	root.right = &treeNode{5, nil, nil}
	root.right.left = new(treeNode)
	root.right.right = createTreeNode(100)
	fmt.Println(root) // {3 0x1400000c048 0x1400000c060}

	nodes := []treeNode{
		{value: 10},
		{},
		{6, nil, &root},
	}
	fmt.Println(nodes) // [{10 <nil> <nil>} {0 <nil> <nil>} {6 <nil> 0x140000a4030}]

	root.print() // 3
	root.setValue(100)
	root.print() // 100
}
