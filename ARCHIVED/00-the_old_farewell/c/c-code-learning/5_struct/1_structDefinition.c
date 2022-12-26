//
// Created by tinyRipple on 2022/3/13.
//

#include <stdio.h>

struct student {
    int id;
    char name[20];
    char sex;
    int age;
    float score;
    char address[100];
};

int main() {
    struct student zdh = {1001, "tinyRipple", 'M', 21, 100, "ZJUT"};

    printf("%d %s %c %d %f %s\n", zdh.id, zdh.name, zdh.sex, zdh.age, zdh.score, zdh.address);
    return 0;
}
