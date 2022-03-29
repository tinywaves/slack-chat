// main为rust的程序入口函数,无返回值
fn main() {
    // 不指定类型编译器会进行自动类型推断为i32：有符号32位整数
    let a = 10;
    // 指定类型为i32
    let b: i32 = 20;
    let c = 30i32;
    let d = 30_i32;
    let e = add(add(a, b), add(c, d));

    // 字符使用'',字符串使用"",使用{}占位,println!会进行类型推导因此不需要指定输出类型
    // println!是宏调用,返回宏定义代码块
    println!("(a + b) + (c + d) = {}", e);
}

fn add(a: i32, b: i32) -> i32 {
    a + b
}
