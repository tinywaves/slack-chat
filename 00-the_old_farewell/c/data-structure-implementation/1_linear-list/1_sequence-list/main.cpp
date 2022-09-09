#include <stdio.h>
#include <stdlib.h>

typedef int ElemType;

// 静态分配内存空间
#define MaxSize 50
typedef struct {
	// 存储数据
	ElemType data[MaxSize];
	// 记录当前已经存储的数据个数
	int length;
} SqList;

// 插入元素, 若插入成功返回true, 反之返回false; L -> 操作的顺序表; i -> 插入元素目标位置, 1 <= i <= length + 1; e -> 插入的元素
bool ListInsert(SqList& L, int i, ElemType e) {
	// 判断插入位置是否合法
	if (i < 1 || i > L.length + 1) {
		return false;
	}
	// 判断当前顺序表是否为满表
	if (L.length >= MaxSize) {
		return false;
	}
	// 后移元素
	for (int j = L.length; j >= i; j--) {
		L.data[j] = L.data[j - 1];
	}
	// 插入元素
	L.data[i - 1] = e;
	// 更新顺序表中的元素个数
	L.length++;
	return true;
}
// 删除元素, 若删除成功返回true, 反之返回false; L -> 操作的顺序表; i -> 删除元素目标位置, 1 <= i <= length; e -> 将被删除的元素赋值给e
bool ListDelete(SqList& L, int i, ElemType& e) {
	// 判断删除位置是否合法
	if (i < 1 || i > L.length) {
		return false;
	}
	// 判断当前顺序表是否为空表
	if (L.length <= 0) {
		return false;
	}
	// 获取i位置上的元素值并赋值给e
	e = L.data[i - 1];
	// 前移元素
	for (int j = i; j <= L.length - 1; j++) {
		L.data[j - 1] = L.data[j];
	}
	// 更新顺序表中的元素个数
	L.length--;
	return true;
}
// 查找元素, 若存在给定元素则返回该元素的位置, 否则返回0; L -> 操作的顺序表; e -> 要查找的元素
int LocateElem(SqList L, ElemType e) {
	for (int i = 0; i < L.length; i++) {
		if (L.data[i] == e) {
			return i + 1;
		}
	}
	return 0;
}
// 打印顺序表元素; L -> 操作的顺序表
void PrintList(SqList L) {
	for (int i = 0; i < L.length; i++) {
		printf("%3d ", L.data[i]);
	}
	printf("\n");
}

int main() {
	SqList L; // 定义一个顺序表
	bool ret; // 定义一个函数返回值
	ElemType del; // 定义一个删除的元素

	L.data[0] = 0; // 添加元素
	L.data[1] = 1;
	L.data[2] = 2;
	L.length = 3; // 设置当前length的值
	ret = ListInsert(L, 2, 60); // 在顺序表L的第2个位置插入元素60
	if (ret) {
		PrintList(L); // 在插入成功后打印顺序表
	}
	ret = ListDelete(L, 1, del); // 删除顺序表L的第一个元素, 并将该值赋值给del
	if (ret) {
		PrintList(L); // 在删除成功后打印顺序表
		printf("%3d\n", del); // 打印被删除的元素的值
	}
	printf("%3d\n", LocateElem(L, 60)); // 在顺序表L中查找元素60并打印该元素的位置
	return 0;
}
