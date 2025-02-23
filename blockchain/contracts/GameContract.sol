pragma solidity ^0.8.19;

import "./GameResult.sol";

contract GameContract {
    event GameStarted(address indexed player1, address indexed player2, uint256 gameId);
    event GameEnded(address indexed player1, address indexed player2, string result);

    address public player1;
    address public player2;
    uint256 public gameId;
    
    GameResult gameResultContract;

    constructor(address _gameResultContractAddress) {
        gameResultContract = GameResult(_gameResultContractAddress);
    }

    function startGame(address _player1) public {
        player1 = _player1;
        player2 = _player2;
        gameId++;

        emit GameStarted(player1, player2, gameId);
    }
}
