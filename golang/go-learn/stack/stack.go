package stack

type Stack []int

func (s *Stack) Push(value int) {
	*s = append(*s, value)
}

func (s *Stack) IsEmpty() bool {
	return len(*s) == 0
}
