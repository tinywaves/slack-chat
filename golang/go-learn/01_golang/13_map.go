package main

import "fmt"

func main() {
	m := map[string]string{
		"name":     "zhengdonghui",
		"nickname": "tinyRipple",
	}

	// 空 map
	m1 := make(map[string]int) // m1 == empty map
	var m2 map[string]bool     // m2 == nil

	fmt.Println(m, m1, m2)

	// map 的遍历，map 是无序的
	for k, v := range m {
		fmt.Println(k, v)
	}

	// get values
	nickname, ok := m["nickname"] // tinyRipple
	fmt.Println(nickname, ok)
	if nick, ok := m["nick"]; ok {
		fmt.Println(nick, ok)
	} else {
		fmt.Println("not exist")
	}

	// delete values
	delete(m, "nickname")
	fmt.Println(m)
}
