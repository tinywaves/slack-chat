#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>

typedef char BiElemType;

// 二叉树
typedef struct BiTNode {
	// 存储数据
	BiElemType data;
	// 左结点
	struct BiTNode* lchild;
	// 右结点
	struct BiTNode* rchild;
} BiTNode, * BiTree;

typedef struct tag {
	// 存储树的结点
	BiTree p;
	// 指向下一个结点的指针
	struct tag* pnext;
} tag_t, * ptag_t;
