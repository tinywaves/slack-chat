package main

import (
	"fmt"
	"golang/tree"
)

type myTreeNode struct {
	*tree.Node // embedding
}

func (myNode *myTreeNode) postOrder() {
	if myNode == nil || myNode.Node == nil {
		return
	}
	left := myTreeNode{myNode.Left}
	left.postOrder()
	right := myTreeNode{myNode.Right}
	right.postOrder()
	myNode.Print()
}

func main() {
	var root1 tree.Node
	root2 := myTreeNode{&tree.Node{Value: 3}}
	root2.Left = &tree.Node{}
	root2.Right = &tree.Node{Value: 5}
	root1.Left = new(tree.Node)
	fmt.Println(root1, root2)

	// fmt.Println(createNode(10))
	// fmt.Println(createNodePointer(20))

	root1.Print()
	root1.SetValue(10)
	root1.Print()

	pRoot := &root1
	pRoot.Print()
	pRoot.SetValue(200)
	pRoot.Print()

	var nilRoot *tree.Node
	nilRoot.SetValue(300)

	fmt.Println("=====")

	root1.Traverse()
	root2.Traverse()
	pRoot.Traverse()

	fmt.Println("=====")

	node := myTreeNode{&root1}
	node.postOrder()
}
