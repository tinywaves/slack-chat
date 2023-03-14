package dev

type Retriever struct{}

// Retriever 接收者如果不使用的话可以省略
func (Retriever) Retriever() string {
	return "dev retriever return content"
}
