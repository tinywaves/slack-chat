//
// Created by tinyRipple on 2022/3/13.
//

#include <stdio.h>

struct person {
    int id;
    char name[20];
    char sex;
};

int main() {
    struct person p = {1001, "tinyRipple", 'M'};
    struct person pArray[3] = {
            1002, "QAZ", 'F',
            1003, "WSX", 'M',
            1004, "EDC", 'F'
    };
    struct person *pointer;

    pointer = &p;
    printf("%d %s %c\n", pointer->id, pointer->name, pointer->sex);
    pointer = pArray;
    printf("%d %s %c\n", pointer->id, pointer->name, pointer->sex);
    printf("%d %s %c\n", (*pointer).id, (*pointer).name, (*pointer).sex);
    return 0;
}
