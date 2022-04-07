#include <stdio.h>

typedef int ElemType;

// 循环队列
#define MaxSize 5 // 循环队列只能存储4个元素
typedef struct {
	// 数据存储数组
	ElemType data[MaxSize];
	// 指向队首的标记
	int front;
	// 指向队尾的标记
	int rear;
} SqQueue;

// 初始化函数; 无返回值; Q -> 传入的循环队列(引用)
void InitQueue(SqQueue& Q) {
	// 初始化头标记和尾标记同时指向数组第一个元素
	Q.front = Q.rear = 0;
}

// 判空函数; 返回一个布尔值, false 表示循环队列不为空, true 表示循环队列为空; Q -> 传入的循环队列
bool isEmpty(SqQueue Q) {
	// 循环队列判空的逻辑是头标记等于尾标记
	return Q.front == Q.rear;
}

// 入队函数; 返回一个布尔值, false 表示入队失败, true 表示入队成功; Q -> 传入的循环队列(引用), e -> 入队元素
bool EnQueue(SqQueue& Q, ElemType e) {
	// 循环队列判满的逻辑是 ((rear + 1) % MaxSize) == front
	if ((Q.rear + 1) % MaxSize == Q.front) {
		return false; // 入队失败
	}
	// 入队, 插入元素
	Q.data[Q.rear] = e;
	// 尾标记后移
	Q.rear = (Q.rear + 1) % MaxSize;
	return true;
}

// 出队函数; 返回一个布尔值, false 表示出队失败, true 表示出队成功; Q -> 传入的循环队列(引用), e -> 出队赋值元素(引用)
bool DeQueue(SqQueue& Q, ElemType& e) {
	if (isEmpty(Q)) {
		return false; // 空队列则出队失败
	}
	// 元素出队
	e = Q.data[Q.front];
	// 头标记后移
	Q.front = (Q.front + 1) % MaxSize;
	return true;
}

int main() {
	SqQueue Q; // 定义循环队列
	ElemType value; // 定义变量

	// 初始化循环队列
	InitQueue(Q);
	// 循环队列判空
	if (isEmpty(Q)) {
		printf("This circular queue is empty.\n");
	}
	// 入队
	EnQueue(Q, 9);
	EnQueue(Q, 6);
	EnQueue(Q, 3);
	// 出队
	for (int i = 0; i < 4; i++) {
		if (DeQueue(Q, value)) {
			printf("%d\n", value);
		}
		else {
			printf("This circular queue is empty.\n");
		}
	}
}
