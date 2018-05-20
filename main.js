let TennisGame = function (player1, player2) {
  this.playerOne = player1;
  this.playerSecond = player2;
  this.playerOneScore = 0;
  this.playerTwoScore = 0;
};

TennisGame.prototype.playerOneScores = function () {
  this.playerOneScore++;
};

TennisGame.prototype.playerTwoScores = function () {
  this.playerTwoScore++;
};

TennisGame.prototype.isDeuce = function () {
  return (this.playerOneScore === this.playerTwoScore && this.playerOneScore >= 3 && this.playerTwoScore >= 3);
};

TennisGame.prototype.playerWithHighestScore = function () {
  if (this.playerOneScore > this.playerTwoScore) {
    return this.playerOne;
  }
  return this.playerSecond;
};

TennisGame.prototype.hasWinner = function () {
  let playerOneLeads = (this.playerOneScore - this.playerTwoScore) >= 2;
  let playerTwoLeads = (this.playerTwoScore - this.playerOneScore) >= 2;
  return ((playerOneLeads && this.playerOneScore > 3) || (playerTwoLeads && this.playerTwoScore > 3));
};

TennisGame.prototype.hasAdvantage = function () {
  let playerOneAdvantage = (this.playerOneScore - this.playerTwoScore) === 1;
  let playerTwoAdvantage = (this.playerTwoScore - this.playerOneScore) === 1;
  return ((playerOneAdvantage && this.playerTwoScore >= 3) || (playerTwoAdvantage && this.playerOneScore >= 3));
};

TennisGame.prototype.translateScore = function (score) {
  return score === 0 ? 'Love' : (score === 1 ? 'Fifteen' : (score === 2 ? 'Thirty' : 'Forty'));
};

TennisGame.prototype.getScore = function () {
  if (TennisGame.prototype.hasWinner()) {
    return (TennisGame.prototype.playerWithHighestScore() + ' wins');
  } else if (TennisGame.prototype.hasAdvantage()) {
    return ('Advantage ' + TennisGame.prototype.playerWithHighestScore());
  } else if (TennisGame.prototype.isDeuce()) {
    return 'Deuce';
  } else if (this.playerOneScore === this.playerTwoScore) {
    return (TennisGame.prototype.translateScore(this.playerOneScore) + ' all');
  } else {
    return TennisGame.prototype.translateScore(this.playerOneScore) + ', ' + TennisGame.prototype.translateScore(this.playerTwoScore);
  }
};
