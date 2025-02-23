import { useState } from "react";
import { generateMoveHash } from "../utils/hash";

interface SelectMoveProps {
  onSelectMove: (move: string, hash: string) => void;
}

const SelectMove = ({ onSelectMove }: SelectMoveProps) => {
  const [selectedMove, setSelectedMove] = useState<string | null>(null);

  const handleMoveSelect = (move: string) => {
    setSelectedMove(move);
    const moveHash = generateMoveHash(move);
    if (moveHash) {
      onSelectMove(move, moveHash);
    } else {
      console.log("해시 생성 실패");
    }
  };

  return (
    <div className="flex flex-col gap-6 mt-8">
      <div className="flex gap-6">
        {["바위", "보", "가위"].map((move) => (
          <button
            key={move}
            onClick={() => handleMoveSelect(move)}
            className={`px-6 py-3 text-xl font-semibold rounded-xl shadow-md transition-all duration-300
              ${
                selectedMove === move
                  ? "bg-blue-600 text-white scale-110 ring-4 ring-blue-400"
                  : "bg-gray-800 text-gray-200 hover:bg-blue-500 hover:text-white"
              }
              neon-border hover:scale-105`}
          >
            {move === "바위" ? "바위" : move === "보" ? "보" : "가위"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectMove;
