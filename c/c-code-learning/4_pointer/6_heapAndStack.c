//
// Created by tinyRipple on 2022/3/12.
//

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *print_stack() {
    char chars[20] = "print stack";

    return chars;
}

char *print_heap() {
    char *p = (char *) malloc(20);

    strcpy(p, "print heap");
    return p;
}

int main() {
    char *p;

    p = print_stack();
    puts(p);
    p = print_heap();
    puts(p);
    return 0;
}
