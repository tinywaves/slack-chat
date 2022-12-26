//
// Created by tinyRipple on 2022/3/12.
//

#include <stdio.h>

void print(char tempArray[]) {
    int i = 0;

    while (tempArray[i]) {
        printf("%c", tempArray[i]);
        i++;
    }
    printf("\n");
}

int main() {
    char charArray1[] = {'h', 'e', 'l', 'l', 'o'};
    char charArray2[10] = "react";
    printf("%s---%s\n", charArray1, charArray2);
    print(charArray2);
    return 0;
}
