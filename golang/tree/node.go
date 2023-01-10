package main

import "fmt"

type treeNode struct {
	value       int
	left, right *treeNode
}

func (node treeNode) print() {
	fmt.Println(node.value)
}

func (node *treeNode) setValue(value int) {
	if node == nil {
		return
	}
	node.value = value
}

func (node *treeNode) traverse() {
	if node == nil {
		return
	}
	node.left.traverse()
	node.print()
	node.right.traverse()
}

// go 没有构造函数，可以使用工厂函数替代
func createNode(value int) treeNode {
	return treeNode{value: value}
}
func createNodePointer(value int) *treeNode {
	return &treeNode{value: value}
}

func main() {
	var root1 treeNode
	root2 := treeNode{value: 3}
	root2.left = &treeNode{}
	root2.right = &treeNode{5, nil, nil}
	root1.left = new(treeNode)
	fmt.Println(root1, root2)

	nodes := []treeNode{
		{value: 1},
		{3, nil, nil},
		{5, &root2, &root1},
	}
	fmt.Println(nodes)

	fmt.Println(createNode(10))
	fmt.Println(createNodePointer(20))

	root1.print()
	root1.setValue(10)
	root1.print()

	pRoot := &root1
	pRoot.print()
	pRoot.setValue(200)
	pRoot.print()

	var nilRoot *treeNode
	nilRoot.setValue(300)

	fmt.Println("=====")

	root1.traverse()
	root2.traverse()
	pRoot.traverse()
}
