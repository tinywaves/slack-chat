//
// Created by tinyRipple on 2022/3/11.
//

#include <stdio.h>

void print(int tempArray[], int length) {
    //数组名存储首地址
    for (int i = 0; i < length; ++i) {
        printf("%3d", tempArray[i]);
    }
    tempArray[4] = 20;
    printf("\n");
}

int main() {
    int array[] = {1, 2, 3, 4, 5};

    print(array, 5);
    printf("array[4]=%d\n", array[4]);
    return 0;
}
