//
// Created by tinyRipple on 2022/3/12.
//

#include <stdio.h>
#include <string.h>

//自定义strlen函数
int customStrlen(const char tempArray[]) {
    int i = 0;

    while (tempArray[i++]);
    return i - 1;
}

int main() {
    char inputChars[100];
    char chars[] = "world";

    while (gets(inputChars) != NULL) {
        puts(inputChars);
        printf("inputCharsLength---strlen=%llu\n", strlen(inputChars));
        printf("inputCharsLength---customStrlen=%d\n", customStrlen(inputChars));
        strcat(inputChars, chars);
        printf("strcat---%s*%s\n", inputChars, chars);
        strcpy(inputChars, chars);
        printf("strcpy---%s*%s\n", inputChars, chars);
        printf("strcmp---%d\n", strcmp(inputChars, chars));
    }
    return 0;
}
