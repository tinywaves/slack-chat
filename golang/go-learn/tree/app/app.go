package main

import (
	"fmt"
	"go-learn/tree"
)

func main() {
	var rootVar tree.Node
	fmt.Println(rootVar) // {0 <nil> <nil>}

	root := tree.Node{Value: 3}
	root.Left = &tree.Node{}
	root.Right = &tree.Node{5, nil, nil}
	root.Right.Left = new(tree.Node)
	root.Right.Right = tree.CreateTreeNode(100)
	fmt.Println(root) // {3 0x1400000c048 0x1400000c060}

	nodes := []tree.Node{
		{Value: 10},
		{},
		{6, nil, &root},
	}
	fmt.Println(nodes) // [{10 <nil> <nil>} {0 <nil> <nil>} {6 <nil> 0x140000a4030}]

	root.Print() // 3
	root.SetValue(100)
	root.Print() // 100

	nodeCount := 0
	root.TraversalFunctionInput(func(node *tree.Node) {
		nodeCount++
	})
	fmt.Println(nodeCount) // 5
}
