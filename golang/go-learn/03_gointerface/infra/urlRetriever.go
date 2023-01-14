package infra

import (
	"io"
	"net/http"
)

type Retriever struct {
}

func (Retriever) Get(url string) string {
	response, err := http.Get(url)
	if err != nil {
		panic(err)
	}

	defer response.Body.Close()
	bytes, _ := io.ReadAll(response.Body)
	return string(bytes)
}
