package main

import (
	"go-learn/error-handling/filelisting-server/handler"
	"log"
	"net/http"
	"os"
)

type appHandler func(writer http.ResponseWriter, request *http.Request) error

type userError interface {
	error
	Message() string
}

func errorWrapper(handler appHandler) func(writer http.ResponseWriter, request *http.Request) {
	return func(writer http.ResponseWriter, request *http.Request) {
		defer func() {
			if r := recover(); r != nil {
				log.Default().Printf("Panic: %V", r)
				http.Error(
					writer,
					http.StatusText(http.StatusInternalServerError),
					http.StatusInternalServerError,
				)
			}
		}()
		err := handler(writer, request)
		if err != nil {
			log.Default().Println("Error handling request: ", err.Error())

			if userErr, ok := err.(userError); ok {
				http.Error(writer, userErr.Message(), http.StatusBadRequest)
				return
			}

			httpCode := http.StatusOK
			switch {
			case os.IsNotExist(err):
				httpCode = http.StatusNotFound
			case os.IsPermission(err):
				httpCode = http.StatusForbidden
			default:
				httpCode = http.StatusInternalServerError
			}
			http.Error(writer, http.StatusText(httpCode), httpCode)
		}
	}
}

func main() {
	http.HandleFunc("/", errorWrapper(handler.FileListingHandler))
	err := http.ListenAndServe(":8888", nil)
	if err != nil {
		return
	}
}
