// 检查是否在浏览器环境
if (typeof window !== "undefined") {
    console.log("当前在浏览器环境中");

    // location 对象
    console.log(location, "location对象");
    console.log(location.href, "当前页面的地址");

    // navigator 对象
    console.log(navigator, "navigator对象");
    console.log(navigator.userAgent, "浏览器信息");

    // setTimeout：延迟执行（单位毫秒），10e⁸ = 1e9 毫秒 = 约11.6天，不实用，改为2000毫秒
    setTimeout(() => {
        console.log("2秒后执行（原为10e⁸毫秒，已修正）");
    }, 2000);

    // setInterval：每隔1秒执行一次，3次后停止
    let count = 0;
    const timer = setInterval(() => {
        count++;
        console.log(count, "每1秒执行一次");
        if (count === 3) {
            clearInterval(timer);
            console.log("定时器已清除");
        }
    }, 1000);  // 注意单位是毫秒，1000 = 1秒
} else {
    console.log("bom.js代码需要在浏览器环境中执行");
}