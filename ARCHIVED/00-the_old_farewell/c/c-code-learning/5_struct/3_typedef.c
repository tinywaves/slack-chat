//
// Created by tinyRipple on 2022/3/13.
//

#include <stdio.h>

typedef struct course {
    int id;
    char name[20];
} COU, *pointerCourse;

typedef int INTEGER;

int main() {
    COU c = {1, "Computer"};
    pointerCourse p = &c;
    INTEGER tempInt = 10;

    printf("%d\n", tempInt);
    printf("%d %s\n", p->id, p->name);
    return 0;
}
