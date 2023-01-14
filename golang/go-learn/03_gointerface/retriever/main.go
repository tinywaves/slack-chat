package main

import (
	"fmt"
	"gointerface/retriever/mock"
	myReal "gointerface/retriever/real"
	"time"
)

const url = "https://www.baidu.com"

type Retriever interface {
	Get(url string) string
}

type Poster interface {
	Post(url string, form map[string]string) string
}

type RetrieverPoster interface {
	Retriever
	Poster
}

func downloader(r Retriever) string {
	return r.Get(url)
}

func post(p Poster) string {
	return p.Post("test poster", map[string]string{"name": "tinyRipple"})
}

func session(s RetrieverPoster) string {
	s.Post(url, map[string]string{"name": "tinyRipple"})
	return s.Get(url)
}

func main() {
	var retriever Retriever
	retriever = &mock.Retriever{Contents: "tinyRipple"}
	fmt.Println(downloader(retriever))
	fmt.Printf("%T %v", retriever, retriever)
	retriever = &myReal.Retriever{UserAgent: "Chrome", Timeout: time.Minute}
	fmt.Println(downloader(retriever))
	fmt.Printf("%T %v", retriever, retriever)

	switch v := retriever.(type) {
	case *mock.Retriever:
		println("mock===", v.Contents)
	case *myReal.Retriever:
		println("real===", v.UserAgent, v.Timeout)
	}

	// type assertion
	if mockRetriever, ok := retriever.(*mock.Retriever); ok {
		fmt.Println(mockRetriever.Contents)
	} else {
		fmt.Println("error assertion")
	}

	s := mock.Retriever{Contents: "fake"}

	fmt.Println(session(&s))
}
