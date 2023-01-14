package main

import (
	"fmt"
	"gointerface/retriever/mock"
	myReal "gointerface/retriever/real"
	"time"
)

type Retriever interface {
	Get(url string) string
}

func downloader(r Retriever) string {
	return r.Get("https://www.baidu.com")
}

func main() {
	var retriever Retriever
	retriever = mock.Retriever{Contents: "tinyRipple"}
	fmt.Println(downloader(retriever))
	fmt.Printf("%T %v", retriever, retriever)
	retriever = &myReal.Retriever{UserAgent: "Chrome", Timeout: time.Minute}
	fmt.Println(downloader(retriever))
	fmt.Printf("%T %v", retriever, retriever)

	switch v := retriever.(type) {
	case mock.Retriever:
		println("mock===", v.Contents)
	case *myReal.Retriever:
		println("real===", v.UserAgent, v.Timeout)
	}

	// type assertion
	if mockRetriever, ok := retriever.(mock.Retriever); ok {
		fmt.Println(mockRetriever.Contents)
	} else {
		fmt.Println("error assertion")
	}
}
