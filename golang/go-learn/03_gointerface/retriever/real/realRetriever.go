package real

import (
	"net/http"
	"net/http/httputil"
	"time"
)

type Retriever struct {
	UserAgent string
	Timeout   time.Duration
}

func (r *Retriever) Get(url string) string {
	response, err := http.Get(url)
	if err != nil {
		panic(err)
	}

	dumpResponse, err := httputil.DumpResponse(response, true)
	if err != nil {
		panic(err)
	}

	response.Body.Close()

	return string(dumpResponse)
}
