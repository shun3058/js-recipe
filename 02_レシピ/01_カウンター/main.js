const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const twiceButton = document.getElementById("twice-button")

let count = 0

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function () {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}

//一つ減らすボタンの処理
minusButton.onclick = () => {
  count -= 1
  display.textContent = count
}

//2倍にするボタンの処理
twiceButton.onclick = () => {
  count *= 2
  display.textContent = count
}
