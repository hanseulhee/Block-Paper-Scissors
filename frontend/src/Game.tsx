import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectMove from "./components/SelectMove";

const Game = () => {
  const navigate = useNavigate();
  const [selectedMove, setSelectedMove] = useState<string | null>(null);
  const [developerMove, setDeveloperMove] = useState<string | null>(null);
  const moves = ["가위", "주먹", "보"];

  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isGameLoading, setIsGameLoading] = useState(false);
  const [gameResult, setGameResult] = useState<string | null>(null);

  const handleSelectMove = (move: string) => setSelectedMove(move);
  const gameResultTime = 3000;

  useEffect(() => {
    if (selectedMove) {
      setIsGameLoading(true);
      setTimeout(() => {
        const randomMove = moves[Math.floor(Math.random() * moves.length)];
        setDeveloperMove(randomMove);

        const result = calculateResult(selectedMove, randomMove);
        setGameResult(result);
        setIsGameEnded(true);
        setIsGameLoading(false);
      }, gameResultTime);
    }
  }, [selectedMove]);

  const calculateResult = (playerMove: string, developerMove: string) => {
    if (playerMove === developerMove) return "비겼습니다!";
    if (
      (playerMove === "보" && developerMove === "가위") ||
      (playerMove === "가위" && developerMove === "주먹") ||
      (playerMove === "주먹" && developerMove === "보")
    ) {
      return "당신이 졌습니다..";
    }
    return "당신이 이겼습니다!";
  };

  return (
    <div className="flex flex-col justify-center min-h-screen bg-dark text-light relative overflow-hidden p-10">
      <h1 className="text-5xl font-extrabold text-primary drop-shadow-lg neon-glow">
        가위바위보 게임
      </h1>
      {!isGameEnded && <SelectMove onSelectMove={handleSelectMove} />}
      {selectedMove && (
        <p className="text-xl opacity-80 mt-4">선택한 값: {selectedMove}</p>
      )}
      {developerMove && (
        <p className="text-xl opacity-80 mt-2">
          게임 상대의 선택: {developerMove}
        </p>
      )}
      {gameResult && (
        <p className="text-2xl font-bold mt-4">게임 결과: {gameResult}</p>
      )}
      {isGameLoading && <p className="text-lg mb-4">두구두구 ...</p>}
      {isGameEnded && (
        <button
          onClick={() => navigate("/gameResult")}
          className="mt-8 px-8 py-4 bg-blue-500 text-white rounded-xl text-xl font-semibold shadow-lg hover:bg-blue-600 transition-all duration-300 neon-border backdrop-blur-md"
        >
          결과 랭킹 보기
        </button>
      )}
    </div>
  );
};

export default Game;
