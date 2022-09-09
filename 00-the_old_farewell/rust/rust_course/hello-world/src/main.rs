fn hello_world() {
    let chinese = "微澜";
    let english = "tinyRipple";
    let regions = [chinese, english];

    for region in regions.iter() {
        println!("{}", &region);
    }
}

fn move_forward() {
    let data = "name,tinyRipple\nid,20010120";
    let lines = data.lines();

    for (_, line) in lines.enumerate() {
        // 声明一个fields变量,类型为Vec
        // Vec是vector的缩写,是一个可伸缩的集合类型,可以认为是一个动态数组
        // <_>表示Vec中的元素类型由编译器自行推断
        let fields: Vec<_> = line.split(',').map(|field| field.trim()).collect();

        // 条件编译
        if cfg!(debug_assertions) {
            // 输出到标准错误输出,只在debug模式下生效
            eprintln!("debug: {:?} -> {:?}", line, fields);
        }

        let key = fields[0];
        let value = fields[1];

        // 尝试把fields[1]的值转换为f32类型的浮点数,如果成功则把该值赋给length
        // if let是一个匹配表达式,用于从=右边的结果中匹配出length的值：当=右边的表达式执行成功则会返回一个Ok(f32)的类型;若失败则会返回一个Err(e)类型.if let的作用就是仅匹配Ok的情况,如果是错误就直接忽略;同时if let还会做一次解构匹配,通过Ok(length)去匹配右边的Ok(f32),最终把相应的f32值赋给length;如果需要匹配失败的情况,则可以使用if let Err(e) = fields[1].parse::<f32>()来匹配
        if let Ok(result) = value.parse::<f32>() {
            // 输出到标准输出
            println!("key:{}, value:{}", key, result);
        }
    }
}

fn main() {
    hello_world();
    move_forward();
}
