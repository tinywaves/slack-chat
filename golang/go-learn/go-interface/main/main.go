package main

import (
	"fmt"
	"go-learn/go-interface/qa"
)

type retriever interface {
	Retriever() string
}

func getRetriever() retriever {
	return qa.Retriever{}
}

func main() {
	retrieverObj := getRetriever()
	fmt.Println(retrieverObj.Retriever()) // qa retriever return content
}
