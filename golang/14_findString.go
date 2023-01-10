package main

import "fmt"

// 寻找最长不含有重复字符的字串

func lengthOfNonRepeatingSubString(s string) int {
	lastOccurred := make(map[byte]int)
	start := 0
	maxlength := 0
	for i, character := range []byte(s) {
		if lastI, ok := lastOccurred[character]; ok && lastI >= start {
			start = lastI + 1
		}
		if i-start+1 > maxlength {
			maxlength = i - start + 1
		}
		lastOccurred[character] = i
	}

	return maxlength
}

func main() {
	fmt.Println(lengthOfNonRepeatingSubString("abcabcbb"))
	fmt.Println(lengthOfNonRepeatingSubString("bbbbb"))
	fmt.Println(lengthOfNonRepeatingSubString("pwwkew"))
}
