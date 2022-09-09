//
// Created by tinyRipple on 2022/3/12.
//

#include <stdio.h>

void change(int **ppi, int **ppj, int *pi, int *pj) {
    *ppi = pj;
    *ppj = pi;
}

int main() {
    int i = 10;
    int j = 20;
    int *pi = &i;
    int *pj = &j;

    printf("i=%d, j=%d, *pi=%d, *pj=%d\n", i, j, *pi, *pj);
    change(&pi, &pj, pi, pj);
    printf("i=%d, j=%d, *pi=%d, *pj=%d\n", i, j, *pi, *pj);
    return 0;
}
