//
// Created by tinyRipple on 2022/3/12.
//

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    int value;
    char *p;

    scanf("%d", &value);
    p = (char*) malloc(value);
    strcpy(p, "malloc use");
    puts(p);
    free(p);
    return 0;
}
