import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS!;
const contractABI = [
  "event GameStarted(address indexed player1, address indexed player2, uint256 gameId)",
  "function startGame(address _player1) public",
];

function GameLobby() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthRejected, setIsAuthRejected] = useState(false);
  const [gameStatus, setGameStatus] = useState("");
  const navigate = useNavigate();

  const handleAuthenticate = async () => {
    if (typeof window.ethereum === "undefined") {
      alert("브라우저용 MetaMask를 설치하세요");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      setGameStatus("잠시만 기다려주세요 (20~30초 소요)");
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      const player1Address = await signer.getAddress();

      const tx = await contract.startGame(player1Address);
      await tx.wait();
      setGameStatus("게임 준비가 완료되었습니다!");
      setIsAuthenticated(true);
    } catch {
      setIsAuthRejected(true);
    }
  };

  useEffect(() => {
    if (isAuthRejected) setGameStatus("");
  }, [isAuthRejected]);

  return (
    <div className="flex flex-col justify-center min-h-screen bg-dark text-light relative overflow-hidden p-10">
      <h1 className="text-5xl font-extrabold text-primary drop-shadow-lg neon-glow">
        게임 대기실
      </h1>

      {!isAuthenticated ? (
        <div>
          <p className="text-xl opacity-80 mt-4">MetaMask 인증이 필요합니다.</p>
          {isAuthRejected ? (
            <div>
              <p className="text-xl opacity-80 mt-1">
                MetaMask 인증을 안할 경우 게임에 참여하실 수 없습니다.
              </p>
              <p className="text-xl opacity-80 mt-4">{gameStatus}</p>
              <button
                onClick={handleAuthenticate}
                className="mt-8 px-8 py-4 bg-secondary/90 text-white rounded-xl text-xl font-semibold shadow-lg hover:bg-accent/80 transition-all duration-300 neon-border backdrop-blur-md"
              >
                인증하기
              </button>
            </div>
          ) : (
            <>
              <p className="text-xl opacity-80 mt-4">{gameStatus}</p>
              <button
                onClick={handleAuthenticate}
                className="mt-8 px-8 py-4 bg-secondary/90 text-white rounded-xl text-xl font-semibold shadow-lg hover:bg-accent/80 transition-all duration-300 neon-border backdrop-blur-md"
              >
                MetaMask 인증하기
              </button>
            </>
          )}
        </div>
      ) : (
        <div>
          <p className="text-xl opacity-80 mt-4">{gameStatus}</p>
          <button
            onClick={() => navigate("/game")}
            className="mt-8 px-8 py-4 bg-green-500 text-white rounded-xl text-xl font-semibold shadow-lg hover:bg-green-600 transition-all duration-300 neon-border backdrop-blur-md"
          >
            게임 시작
          </button>
        </div>
      )}
    </div>
  );
}

export default GameLobby;
