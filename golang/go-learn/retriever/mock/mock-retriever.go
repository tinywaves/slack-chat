package mock

type Retriever struct {
	Content string
}

func (receiver *Retriever) Post(url string, form map[string]string) string {
	receiver.Content = form["name"]
	return "ok"
}

func (receiver *Retriever) Get(url string) string {
	return receiver.Content
}
