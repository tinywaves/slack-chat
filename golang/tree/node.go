package tree

import "fmt"

type Node struct {
	Value       int
	Left, Right *Node
}

func (node Node) Print() {
	fmt.Println(node.Value)
}

func (node *Node) SetValue(value int) {
	if node == nil {
		return
	}
	node.Value = value
}

func (node *Node) Traverse() {
	if node == nil {
		return
	}
	node.Left.Traverse()
	node.Print()
	node.Right.Traverse()
}

// go 没有构造函数，可以使用工厂函数替代
func createNode(value int) Node {
	return Node{Value: value}
}
func createNodePointer(value int) *Node {
	return &Node{Value: value}
}
