package main

import (
	"fmt"
	"gointerface/testing"
)

func getRetriever() retriever {
	// return infra.Retriever{}
	return testing.Retriever{}
}

// something can get
type retriever interface {
	Get(url string) string
}

func main() {
	retriever := getRetriever()
	fmt.Println(retriever.Get("https://arco.design"))
}
