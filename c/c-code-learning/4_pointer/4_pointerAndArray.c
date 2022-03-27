//
// Created by tinyRipple on 2022/3/12.
//

#include <stdio.h>

void change(char *p) {
    *p = 'H';
    p[1] = 'E';
    *(p + 2) = 'L';
}

int main() {
    char array[] = "hel";

    change(array);
    printf("%s\n", array);
    return 0;
}
