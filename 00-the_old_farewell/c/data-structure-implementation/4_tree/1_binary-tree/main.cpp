#include "function.h"

int main() {
	ptag_t tempQueueNode; // 定义一个临时队列结点
	ptag_t head = NULL; // 指向队列头
	ptag_t tail = NULL; // 指向队列尾
	ptag_t current = NULL; // 指向当前可以插入树结点的队列结点
	BiTree treeNode; // 定义树结点
	BiTree tree = NULL; // 定义树指针, 表示树根
	char c; // 读取字符

	// 读入字符进行建树
	while (scanf("%c", &c) != EOF) {
		// 读取到末尾退出循环
		if (c == '\n') {
			break;
		}
		// 申请空间并赋值初始化
		treeNode = (BiTree)malloc(sizeof(BiTNode));
		treeNode->data = c;
		treeNode->lchild = NULL;
		treeNode->rchild = NULL;
		// 申请队列节点空间并赋值初始化
		tempQueueNode = (ptag_t)malloc(sizeof(tag_t));
		tempQueueNode->p = treeNode;
		tempQueueNode->pnext = NULL;

		// 如果树根为空, 直接将树结点赋值给 tree 并入队
		if (NULL == tree) {
			tree = treeNode;
			head = tempQueueNode;
			tail = tempQueueNode;
			current = tempQueueNode;
			continue;
		}
		// 树根不为空, 将新树结点入队
		else {
			tail->pnext = tempQueueNode;
			tail = tail->pnext;
		}
		// 插入树结点
		if (NULL == current->p->lchild) {
			// 左结点为空则将新结点插入左结点
			current->p->lchild = treeNode;
		}
		else if (NULL == current->p->rchild) {
			// 右结点为空则将新结点插入右结点并后移 current
			current->p->rchild = treeNode;
			current = current->pnext;
		}
	}
}

