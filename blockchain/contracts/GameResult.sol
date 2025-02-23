pragma solidity ^0.8.19;

contract GameResult {
    struct Result {
        address player;
        string result;
        uint256 timestamp;
    }

    Result[] public results;

    function getAllResults() public view returns (Result[] memory) {
        return results;
    }

    function addResult(address _player, string memory _result) public {
        results.push(Result(_player, _result, block.timestamp));
    }
}
