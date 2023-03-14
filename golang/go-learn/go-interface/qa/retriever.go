package qa

type Retriever struct{}

func (Retriever) Retriever() string {
	return "qa retriever return content"
}
