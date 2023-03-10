package main

import "fmt"

func main() {
	// create
	m1 := map[string]string{
		"name":     "zhengdonghui",
		"nickname": "tinyRipple",
	}
	m2 := make(map[string]int)
	fmt.Println(m1, m2) // map[name:zhengdonghui nickname:tinyRipple] map[]

	// traversing
	for k, v := range m1 {
		// 无序遍历，如果需要有序则需要手动对 key 进行排序
		// nickname tinyRipple
		// name zhengdonghui
		fmt.Println(k, v)
	}

	// get
	v1, ok1 := m1["name"]
	v2, ok2 := m1["test-name"]
	fmt.Println(v1, ok1) // zhengdonghui true
	fmt.Println(v2, ok2) // "" false

	// delete
	delete(m1, "nickname")
	fmt.Println(m1) // map[name:zhengdonghui]

	// length
	fmt.Println(len(m1)) // 1
}
