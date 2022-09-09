//
// Created by tinyRipple on 2022/3/8.
//

#include <stdio.h>

int main() {
    /*scanf*/
    /*char i;

    while (scanf("%c", &i) != EOF) {
        if (i != '\n') {
            printf("%c\n", i + 32);
        } else {
            printf("\n");
        }
    }*/

    // 混合输入
    int i;
    double d;
    float f;
    char c;

    scanf("%d%lf%f %c", &i, &d, &f, &c);
    printf("%d %5.2lf %5.2f %c\n", i, d, f, c);
    return 0;
}
