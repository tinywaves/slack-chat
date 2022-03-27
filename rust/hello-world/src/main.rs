fn hello_world() {
    let chinese = "微澜";
    let english = "tinyRipple";
    let regions = [chinese, english];
    for region in regions.iter() {
        println!("{}", &region);
    }
}

fn main() {
    hello_world();
}
