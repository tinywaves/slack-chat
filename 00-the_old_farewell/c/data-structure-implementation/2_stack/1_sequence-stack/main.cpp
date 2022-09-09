#include <stdio.h>

typedef int ElemType;

// 顺序栈
#define MaxSize 50
typedef struct {
	// 数据存储数组
	ElemType data[MaxSize];
	// 指向栈顶的位置标记
	int top;
} SqStack;

// 初始化栈函数; 无返回值; S -> 传入定义的顺序栈(引用)
void InitStack(SqStack& S) {
	// top = -1 表示顺序栈为空栈
	S.top = -1;
}

// 顺序栈判空函数; 返回 bool 值, true 表示为空栈, false 表示不为空栈; S -> 传入定义的顺序栈
bool StackEmpty(SqStack S) {
	return S.top == -1;
}

// 入栈函数; 返回 bool 值, true 表示入栈成功, false 表示入栈失败; S -> 传入定义的顺序栈(引用), e -> 入栈元素
bool Push(SqStack& S, ElemType e) {
	// 栈顶指向最后一个元素此时顺序栈已满, 入栈失败
	if (S.top == MaxSize - 1) {
		return false;
	}
	// 改变栈顶并插入元素
	S.data[++S.top] = e;
	return true;
}

// 出栈函数; 返回 bool 值, true 表示出栈成功, false 表示出栈失败; S -> 传入定义的顺序栈(引用), e -> 赋值出栈元素
bool Pop(SqStack& S, ElemType& e) {
	// 顺序栈为空表示不能出栈, 出栈失败
	if (StackEmpty(S)) {
		return false;
	}
	// 出栈将栈顶元素赋值给 e, 后移栈顶标记
	e = S.data[S.top--];
	return true;
}

// 获取栈顶元素函数; 返回 bool 值, true 表示获取成功, false 表示获取失败; S -> 传入定义的顺序栈, e -> 赋值栈顶元素(引用)
bool GetTop(SqStack S, ElemType& m) {
	// 顺序栈为空无法获取栈顶元素
	if (StackEmpty(S)) {
		return false;
	}
	m = S.data[S.top];
	return true;
}

// 打印栈; 无返回值; S -> 传入定义的顺序栈
void PrintStack(SqStack S) {
	for (int i = 0; i <= S.top; i++) {
		printf("%d ", S.data[i]);
	}
	printf("\n");
}

int main() {
	ElemType value; // 定义变量
	SqStack S; // 定义一个顺序栈

	// 初始化顺序栈
	InitStack(S);
	// 顺序栈判空
	if (StackEmpty(S)) {
		printf("This sequence stack is empty.\n");
	}
	// 入栈
	Push(S, 9);
	Push(S, 6);
	Push(S, 3);
	// 打印栈
	PrintStack(S);
	// 获取栈顶元素
	if (GetTop(S, value)) {
		printf("%d\n", value);
	}
	for (int i = 0; i < 4; ++i) {
		// 出栈
		if (Pop(S, value)) {
			printf("%d\n", value);
		}
		else {
			printf("This sequence stack is empty.\n");
		}
	}
}
