//
// Created by tinyRipple on 2022/3/12.
//

#include <stdio.h>

void change(int *temp) {
    *temp = 5;
}

int main() {
    int value = 10;

    printf("before value: %d\n", value);
    change(&value);
    printf("after value: %d\n", value);
    return 0;
}
