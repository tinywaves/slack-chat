fn mut_test() {
    let mut temp = 10;
    println!("{}", temp);
    temp = 20;
    println!("{}", temp);
}

fn variable_deconstruction() {
    let (a, mut b): (bool, bool) = (true, false);
    println!("a = {:?}, b = {:?}", a, b);
    b = true;
    assert_eq!(a, b);
}

struct Struct {
    e: i32,
}
fn deconstruction_assignment() {
    let (a, b, c, d, e);

    (a, b) = (1, 2);
    [c, .., d, _] = [1, 2, 3, 4, 5];
    Struct { e, .. } = Struct { e: 5 };

    assert_eq!([1, 2, 1, 4, 5], [a, b, c, d, e]);
}

fn shadowing() {
    let x = 1; // 1
    let x = x + 1; // 2

    {
        let x = x + 1; // 3
        println!("{}", x);
    }
    let x = x + 1; // 3
    println!("{}", x);
}

fn main() {
    // mut_test()
    // variable_deconstruction();
    // deconstruction_assignment();
    shadowing();
}
