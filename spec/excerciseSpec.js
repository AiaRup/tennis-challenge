var game;

// creates a new game before each spec
beforeEach(function() {
  game = new TennisGame('Aaron', 'Avi');
});

// resets players scores after each spec
afterEach(function() {
  game.playerOneScore = 0;
  game.playerTwoScore = 0;
});

describe('playerOneScores', function() {
  it("should increase player one's score by one", function() {
    game.playerOneScores();

    expect(game.playerOneScore).toEqual(1);
  });
});

describe('playerTwoScores', function() {
  it("should increase player twos's score by one", function() {
    game.playerTwoScores();

    expect(game.playerTwoScore).toEqual(1);
  });
});

describe('isDeuce', function() {
  it('should return true if the players have the same score that is 3 or above', function() {
    game.playerOneScores();
    game.playerOneScores();
    game.playerOneScores();

    game.playerTwoScores();
    game.playerTwoScores();
    game.playerTwoScores();

    expect(game.isDeuce()).toEqual(true);
  });

  it("should return false if the players don't have the same score but one is 3 or above", function() {
    game.playerOneScores();
    game.playerOneScores();
    game.playerOneScores();

    game.playerTwoScores();
    game.playerTwoScores();
    game.playerTwoScores();
    game.playerTwoScores();

    expect(game.isDeuce()).toEqual(false);
  });
});

describe('playerWithHighestScore', function() {
  it('should return the string of the player with the highest score', function() {
    game.playerOneScores();

    expect(game.playerWithHighestScore()).toEqual('Aaron');
  });
});

describe('hasWinner', function() {
  it('should return true if someone has won', function() {
    game.playerOneScores();
    game.playerOneScores();
    game.playerOneScores();
    game.playerOneScores();

    expect(game.hasWinner()).toEqual(true);
  });

  it('should return false if there is no winner', function() {
    expect(game.hasWinner()).toEqual(false);
  });
});

describe('hasAdvantage', function() {
  it('should return true if a player has the advantage', function() {
    game.playerOneScores();
    game.playerOneScores();
    game.playerOneScores();
    game.playerOneScores();

    game.playerTwoScores();
    game.playerTwoScores();
    game.playerTwoScores();
    game.playerTwoScores();
    game.playerTwoScores();
    expect(game.hasAdvantage()).toEqual(true);
  });

  it('should return false if a player does no players has the advantage', function() {
    expect(game.hasAdvantage()).toEqual(false);
  });
});

describe('translateScore', function() {
  it("should return 'Love' if the score is 0", function() {
    expect(game.translateScore(0)).toEqual('Love');
  });

  it("should return 'Fifteen' if the score is 1", function() {
    expect(game.translateScore(1)).toEqual('Fifteen');
  });

  it("should return 'Thirty' if the score is 2", function() {
    expect(game.translateScore(2)).toEqual('Thirty');
  });

  it("should return 'Forty' if the score is 3", function() {
    expect(game.translateScore(3)).toEqual('Forty');
  });
});

describe('getScore', function() {
  it('should return the winner if there is one', function() {
    game.playerTwoScores();
    game.playerTwoScores();
    game.playerTwoScores();
    game.playerTwoScores();

    expect(game.getScore()).toEqual('Avi wins');
  });

  it('should return the advantage if there is one', function() {
    game.playerOneScores();
    game.playerOneScores();
    game.playerOneScores();
    game.playerOneScores();

    game.playerTwoScores();
    game.playerTwoScores();
    game.playerTwoScores();
    game.playerTwoScores();
    game.playerTwoScores();

    expect(game.getScore()).toEqual('Advantage Avi');
  });

  it("should return the 'Deuce' if there is one", function() {
    game.playerOneScores();
    game.playerOneScores();
    game.playerOneScores();

    game.playerTwoScores();
    game.playerTwoScores();
    game.playerTwoScores();

    expect(game.getScore()).toEqual('Deuce');
  });

  it("should return the 'all' if there is a tie", function() {
    game.playerOneScores();

    game.playerTwoScores();

    expect(game.getScore()).toEqual('Fifteen all');
  });

  it('should return the score if there is no special case', function() {
    game.playerOneScores();

    game.playerTwoScores();
    game.playerTwoScores();

    expect(game.getScore()).toEqual('Fifteen, Thirty');
  });
});
