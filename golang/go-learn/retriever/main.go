package main

import (
	"fmt"
	"go-learn/retriever/mock"
	"go-learn/retriever/production"
	"time"
)

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

func download(r Retriever) string {
	return r.Get("https://goproxy.cn/")
}

func post(p Poster) {
	p.Post("tinyRipple", map[string]string{"name": "zhengdonghui"})
}

func session(s RetrieverPoster) string {
	s.Post("test url", map[string]string{"name": "test name"})
	return s.Get("test url")
}

func inspect(r Retriever) {
	switch v := r.(type) {
	case *mock.Retriever:
		fmt.Println("mock: ", v.Content)
	case production.Retriever:
		fmt.Println("production: ", v.UserAgent, v.Timeout)
	}
}

func main() {
	var r Retriever

	rp := &mock.Retriever{Content: "mocks"}
	// fmt.Println(download(r)) // mocks
	fmt.Printf("%T %v\n", r, r) // mock.Retriever {mocks}
	inspect(r)                  // mock:  mocks
	if mr, ok := r.(*mock.Retriever); ok {
		fmt.Println(mr.Content) // mocks
	}

	fmt.Println(session(rp)) // test name

	r = production.Retriever{UserAgent: "Mozilla/5.0", Timeout: time.Minute}
	// fmt.Println(download(r))
	fmt.Printf("%T %v\n", r, r) // production.Retriever {Mozilla/5.0 1m0s}
	inspect(r)                  // production:  Mozilla/5.0 1m0s
	if pr, ok := r.(production.Retriever); ok {
		fmt.Println(pr.UserAgent, pr.Timeout) // Mozilla/5.0 1m0s
	}
}
