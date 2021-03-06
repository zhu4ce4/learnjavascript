function getResult() {
    var first = parseFloat(document.getElementById('first').value); //获取到的是string需要转换!
    var second = parseFloat(document.getElementById('second').value);

    var selected = document.getElementById('mym');
    var index = selected.selectedIndex;
    var option = selected.options[index].value;

    if (isNaN(first) || isNaN(second)) {
        alert("请输入数据后再计算!");
        return;
    }
    if (option === "add") {
        document.getElementById('result').value = first + second;   //此处必须是一个动作!
    } else if (option === "minus") {
        document.getElementById('result').value = first - second;
    } else if (option === "multiply") {
        document.getElementById('result').value = first * second;
    } else if (option === "divided") {
        if (second === 0) {
            alert("除数不能为0，请重新输入");
            return;
        }
        document.getElementById('result').value = first / second;
    }
}

function resetInput() {
    //todo 清除失败!
    document.getElementById('first').value = '';
    document.getElementById('second').value = '';
    document.getElementById('result').value = '';
}


let [box, content, text] = [
    document.querySelector('.box'),
    document.querySelector('.content'),
    document.querySelector('.text')
];
let [textWidth, boxWidth] = [
    text.offsetWidth,
    box.offsetWidth
];
window.onload = function checkScrollLeft() {
    content.innerHTML += content.innerHTML;
    document.querySelector('.text').classList.add('padding');
    // 更新
    textWidth = document.querySelector('.text').offsetWidth;
    toScrollLeft()
};

function toScrollLeft() {
    box.scrollLeft++;
    setTimeout('toScrollLeft()', 40);
}


function compute() {
    const qishimoney = parseFloat(document.getElementById('origin').value);
    const rate = parseFloat(document.getElementById('rate').value);
    var years = parseInt(document.getElementById('years').value);
    const appendmoney = parseFloat(document.getElementById('benjin').value);

    var benjinhe = qishimoney + appendmoney * years;
    document.getElementById('amountOfBenjin').value = benjinhe;

    var benxihe = qishimoney;
    var lixi = 0;
    var lixihe = 0;

    while (years > 0) {
        lixi = (benxihe + appendmoney) * (rate / 100);
        lixihe += lixi;
        benxihe += appendmoney + lixi;
        years--;
    }
    document.getElementById('lixihe').value = lixihe.toFixed(2);
    document.getElementById('benxihe').value = benxihe.toFixed(2);
}
