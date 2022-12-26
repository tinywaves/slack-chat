//
// Created by tinyRipple on 2022/3/12.
//

#include <stdio.h>

int main() {
    int array[] = {2, 6, 8};
    int *p = array;
    int value = *p++;

    printf("array[0]=%d, value=%d, *p=%d\n", array[0], value, *p);
    value = p[0]++;
    printf("array[0]=%d, value=%d, *p=%d\n", array[0], value, *p);
    return 0;
}
