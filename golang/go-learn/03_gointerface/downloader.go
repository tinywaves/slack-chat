package main

import (
	"io"
	"net/http"
)

func main() {
	response, err := http.Get("https://arco.design")

	if err != nil {
		panic(err)
	}

	defer response.Body.Close()
	bytes, _ := io.ReadAll(response.Body)
}
