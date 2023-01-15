package main

import (
	"io"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/list/", func(writer http.ResponseWriter, request *http.Request) {
		path := request.URL.Path[len("/list/"):]
		file, err := os.Open(path)
		if err != nil {
			http.Error(writer, err.Error(), http.StatusInternalServerError)
			return
		}
		defer file.Close()

		bytes, err := io.ReadAll(file)
		if err != nil {
			panic(err)
		}

		writer.Write(bytes)
	})

	err := http.ListenAndServe(":8888", nil)
	if err != nil {
		panic(err)
	}
}
