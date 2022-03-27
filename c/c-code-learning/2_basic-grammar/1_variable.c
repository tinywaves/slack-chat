//
// Created by tinyRipple on 2022/3/8.
//

#include <stdio.h>

#define PI 3

int main() {
    /*int-4byte*/
    int i = PI * 2;
    int sixteen = 0x7b; // 十六进制
    int eight = 0173; // 八进制

    printf("PI = %d\n", PI);
    printf("i = %d\n", i);
    printf("sixteen: %d\n", sixteen);
    printf("eight: %d\n", eight);

    /*float-4byte*/
    /*char-1byte*/
    char a, b;

    a = 97;
    b = 'b';
    printf("a=%c, b=%c\n", a, b);
    printf("a=%d, b=%d\n", a, b);

    /*""*/
    /*calculate*/
    int value = 5;
    float result = (float)value / 2;

    printf("result=%f\n", result);
    return 0;
}
