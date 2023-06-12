package main

import (
	"fmt"
	"os"
)

func main() {
	const filename = "test.txt"
	_, err := os.OpenFile(filename, os.O_CREATE|os.O_EXCL, 0666)
	if err != nil {
		if pathError, ok := err.(*os.PathError); !ok {
			panic(err)
		} else {
			// open, test.txt, file exists
			fmt.Printf("%s, %s, %s\n", pathError.Op, pathError.Path, pathError.Err)
		}
	}
}
