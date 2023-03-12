package tree

import "fmt"

type Node struct {
	Value       int
	Left, Right *Node
}

func CreateTreeNode(value int) *Node {
	return &Node{Value: value}
}

func (receiver *Node) Print() {
	fmt.Println(receiver.Value)
}

func (receiver *Node) SetValue(newValue int) {
	receiver.Value = newValue
}
