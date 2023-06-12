package handler

import (
	"io"
	"net/http"
	"os"
)

func FileListingHandler(writer http.ResponseWriter, request *http.Request) error {
	path := request.URL.Path[len("/list/"):]

	file, err := os.Open(path)
	if err != nil {
		return err
	}
	defer file.Close()

	readAll, err := io.ReadAll(file)
	if err != nil {
		return err
	}

	_, err = writer.Write(readAll)
	if err != nil {
		return err
	}

	return nil
}
