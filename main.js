function play(startingBet) {
  totalRolls = 0;
  rollCountAtHighest = 0;
  gameMoney = parseInt(startingBet);
  maxValue = gameMoney;
  while (gameMoney > 0) {
    totalRolls++;
    if (sumTwoDice() == 7) {
      gameMoney += 4;
      if (gameMoney > maxValue) {
        maxValue = gameMoney;
        rollCountAtHighest = totalRolls;
      }
    } else {
      gameMoney--;
    }
  }
  values = [startingBet, totalRolls, maxValue, rollCountAtHighest];
  return values;
}

function removeError() {
  document.forms["bet"]["startingBet"].parentElement.className =
    "input-group mb-3";
}

function validateInput() {
  var startingBet = document.forms["bet"]["startingBet"].value;

  if (startingBet == "" || isNaN(startingBet) || startingBet <= 0) {
    alert("Starting Bet must be a number greater than 0.");
    document.forms["bet"]["startingBet"].parentElement.className =
      "input-group mb-3 has-error";
    document.forms["bet"]["startingBet"].focus();
    return false;
  } else {
    removeError();
    /* play returns an array of the required values */
    values = play(startingBet);
    document.getElementById("results").style.display = "table";
    document.getElementById("initialBet").innerText = "$" + values[0] + ".00";
    document.getElementById("totalRolls").innerText = values[1];
    document.getElementById("maxValue").innerText = "$" + values[2] + ".00";
    document.getElementById("rollCountAtHighest").innerText = values[3];
  }
  return false;
}

function sumTwoDice() {
  die1 = Math.ceil(Math.random() * 6);
  die2 = Math.ceil(Math.random() * 6);
  return die1 + die2;
}
