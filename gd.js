// 假设背景图容器的宽度是容器的宽度，高度是图片的高度  
let container = document.getElementById('background-wrapper');  
let bgWidth = container.clientWidth; // 容器宽度  
let bgImage = new Image();  
bgImage.src = 'img/bj.png'; // 替换为你的图片URL  
bgImage.onload = function() {  
    let bgHeight = bgImage.height; // 图片高度  
    let scrollPosition = 0; // 初始滚动位置  
  
    // 每秒滚动一定距离  
    setInterval(function() {  
        scrollPosition -= 1; // 向左滚动  
        if (scrollPosition <= -bgHeight) {  
            scrollPosition = 0; // 重置位置，实现无缝循环  
        }  
  
        // 动态修改背景图位置  
        container.style.backgroundPosition = `${scrollPosition}px 0`;  
    }, 120); // 每10毫秒滚动一次，可以根据需要调整速度  
};  
  
// 注意：上面的实现方式其实并不准确，因为我们是用CSS的background-position来模拟的。  
// 在真实应用中，可能需要创建一个实际的<img>元素，并通过CSS的position和transform属性来控制其滚动。  
  
// 更精确的实现可能涉及创建一个足够长的<img>元素，其src为重复拼接的图片，  
// 并通过CSS的transform: translateX()来移动这个<img>元素。
