var gameData = {
  Money: 0,
  MoneyPerClick: 1,
  moneyPerClickCost: 10
}

function makeMoney() {
  gameData.Money += gameData.MoneyPerClick
  document.getElementById("MoneyMade").innerHTML = gameData.Money + " Money Made"
}

function buyMoneyPerClick() {
  if (gameData.Money >= gameData.moneyPerClickCost){
    gameData.Money -= gameData.moneyPerClickCost
    gameData.MoneyPerClick += 1
    gameData.moneyPerClickCost *= 1.5
    document.getElementById("MoneyMade").innerHTML = gameData.Money + " Money Made"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Skill (Now Level" + gameData.MoneyPerClick + ") Cost: " + gameData.moneyPerClickCost + " Money"
  }
}

var mainGameLoop = window.setInterval(function() {
  makeMoney()
}, 1000)

var saveGameAuto = window.setInterval(function() {
  localStorage.setItem('MoneyMakerSave', JSON.stringify(gameData))
}, 15000)

var saveGame = JSON.parse(localStorage.getItem("MoneyMakerSave"))
if (saveGame !== null){
  gameData = saveGame
}
