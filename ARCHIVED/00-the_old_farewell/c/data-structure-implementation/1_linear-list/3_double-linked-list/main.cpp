#include <stdio.h>
#include <stdlib.h>

typedef int ElemType;
typedef struct DNode {
	ElemType data;
	DNode* pre;
	DNode* next;
} DNode, * DLinkList;

// 头插法新建链表, 返回创建链表后的头指针; L -> 头指针
DLinkList CreateListHead(DLinkList& L) {
	int value; // 定义一个输入量
	DLinkList temp; // 定义一个临时结构体指针用于指向一个新创建的结点

	// 创建头结点
	L = (DLinkList)malloc(sizeof(DNode));
	// 规定头结点的pre为NULL
	L->pre = NULL;
	L->next = NULL;
	// 开始读取第一个数据
	scanf_s("%d", &value);
	// 规定读入数据若不等于9999则表示后续还有剩余数据输入
	while (value != 9999) {
		// 创建一个新结点用于保存输入的数据
		temp = (DLinkList)malloc(sizeof(DNode));
		// 赋值数据域
		temp->data = value;
		// 赋值指针域
		temp->next = L->next;
		temp->pre = L;
		// 将temp头插入链表
		L->next = temp;
		// 继续读取数据
		scanf_s("%d", &value);
	}
	return L;
}
// 尾插法新建链表, 返回创建链表后的头指针; L -> 头指针
DLinkList CreateListTail(DLinkList& L) {
	int value; // 定义一个输入量
	DLinkList temp; // 定义一个临时结构体指针用于指向一个新创建的结点
	DLinkList tail; // 定义一个标记指针用于指向链表末尾

	// 创建头结点
	L = (DLinkList)malloc(sizeof(DNode));
	L->pre = NULL;
	L->next = NULL;
	// 将tail指向头结点表示初始化
	tail = L;
	// 开始读取第一个数据
	scanf_s("%d", &value);
	// 规定读入数据若不等于9999则表示后续还有剩余数据输入
	while (value != 9999) {
		// 创建一个新结点用于保存输入的数据
		temp = (DLinkList)malloc(sizeof(DNode));
		// 赋值数据域
		temp->data = value;
		// 赋值指针域
		temp->pre = tail;
		temp->next = NULL;
		// 在末尾插入新节点
		tail->next = temp;
		// 更新tail的指向
		tail = temp;
		// 继续读取数据
		scanf_s("%d", &value);
	}
	return L;
}
// 按位查找元素, 返回特定项的结构体的指针; L -> 头指针; i -> 要查找的位置
DLinkList GetElem(DLinkList L, int i) {
	int flag = 0; // 用于标记当前的位置, 赋值为0表示当前位置位于头结点

	// 输入为0则表示返回头指针
	if (i == 0) {
		return L;
	}
	// 输入为负值则表示非法直接返回NULL
	if (i < 1) {
		return NULL;
	}
	while (L && flag < i) {
		// 结点后移
		L = L->next;
		// 更新标记值
		flag++;
	}
	// 返回特定数据结点的结构体指针
	return L;
}
// 按值查找元素, 返回特定项的结构体的指针; L -> 头指针; i -> 要查找的元素值
DLinkList LocateElem(DLinkList L, int e) {
	// 获取第一个数据结点
	L = L->next;
	// 遍历判断每个数据结点保存的值是否等于给定值e
	while (L != NULL) {
		// 若当前项保存的值等于给定值e则返回当前项的结构体指针
		if (L->data == e) {
			return L;
		}
		// 否则移动到下一项
		else {
			L = L->next;
		}
	}
	// 查找失败则返回当前指针指向, 因为此时退出了while循环, 因此此时L值为NULL
	return L;
}
// 插入元素, 若插入成功返回true, 反之返回false; L -> 操作的链表的头指针; i -> 插入元素目标位置; e -> 插入的元素
bool ListInsert(DLinkList& L, int i, ElemType e) {
	// 获取特定位置的结构体指针, 因为GetElem返回的是某一项的位置, 若需要在该位置插入一项则需要获得前一项
	DLinkList flag = GetElem(L, i - 1);
	// 位置非法, 插入失败
	if (flag == NULL) {
		return false;
	}
	// 创建一个新节点
	DLinkList temp = (DLinkList)malloc(sizeof(DNode));
	// 赋值数据域
	temp->data = e;
	// 赋值指针域
	temp->next = flag->next;
	flag->next->pre = temp;
	temp->pre = flag;
	flag->next = temp;
	return true;
}
// 删除元素, 若删除成功返回true, 反之返回false; L -> 操作的链表的头指针; i -> 删除元素目标位置
bool ListDelete(DLinkList& L, int i) {
	// 获取特定位置的前一项, 因为GetElem返回的是某一项的位置, 若需要删除该位置结点则需要获得前一项
	DLinkList temp = GetElem(L, i - 1);
	// 获取特定位置项
	DLinkList flag = temp->next;
	// 位置非法, 插入失败
	if (temp == NULL || flag == NULL) {
		return false;
	}
	// 删除结点flag
	temp->next = flag->next;
	flag->next->pre = temp;
	// 释放flag的内存空间
	free(flag);
	return true;
}
// 打印链表; L -> 头指针
void PrintList(DLinkList L) {
	// 获取第一个数据结点
	L = L->next;
	while (L != NULL) {
		printf("%3d", L->data);
		L = L->next;
	}
	printf("\n");
}

int main() {
	DLinkList L; // 头指针
	bool ret; // 定义一个函数返回值
	
	CreateListHead(L); // 头插法创建链表
	PrintList(L); // 打印链表
	CreateListTail(L); // 尾插法创建链表
	PrintList(L); // 打印链表
	printf("%3d\n", GetElem(L, 2)->data); // 打印链表L的第二个数据结点保存的值
	if (LocateElem(L, 6) != NULL) {
		printf("%3d\n", LocateElem(L, 6)->data); // 查找链表L是否保存了数据值6, 若存在则打印该值
	}
	ret = ListInsert(L, 3, 50); // 在链表L的第三个位置插入元素100
	if (ret) {
		PrintList(L); // 在插入成功后打印链表
	}
	ret = ListDelete(L, 1); // 删除链表L的第一个数据结点
	if (ret) {
		PrintList(L); // 在删除成功后打印链表
	}
	return 0;
}
