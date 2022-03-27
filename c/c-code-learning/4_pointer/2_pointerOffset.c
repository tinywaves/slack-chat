//
// Created by tinyRipple on 2022/3/12.
//

#include <stdio.h>

int main() {
    int array[] = {1, 2, 3, 4, 5};
    int *p = array;

    for (int i = 0; i < 5; ++i) {
        printf("%3d", *(p + i));
    }
    return 0;
}
