let circles = []; // 存储圆的数组

function setup() {
    createCanvas(windowWidth, windowHeight); // 创建与窗口大小相同的画布
    background(255, 255, 224); // 设置背景为淡黄色 (RGB: 255, 255, 224)

    // 初始化 40 个圆
    for (let i = 0; i < 40; i++) {
        circles.push({
            x: random(width), // 随机生成圆的 x 坐标
            y: random(height), // 随机生成圆的 y 坐标
            size: random(30, 50), // 随机生成圆的初始大小 (30 到 50)
            color: color(random(255), random(255), random(255)) // 随机生成圆的颜色
        });
    }
}

function draw() {
    resizeCanvas(windowWidth, windowHeight); // 确保画布大小与窗口一致
    background(255, 255, 224); // 填充背景颜色为淡黄色

    // 绘制圆
    for (let circle of circles) {
        fill(circle.color); // 设置圆的填充颜色
        noStroke(); // 去掉圆的边框
        let dynamicSize = map(mouseX, 0, width, 20, 80); // 根据鼠标 X 位置调整圆的大小 (20 到 80)
        ellipse(circle.x, circle.y, circle.size + dynamicSize); // 绘制圆，大小为初始大小加动态大小
    }
}
