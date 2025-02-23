import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center min-h-screen bg-dark text-light relative overflow-hidden p-10">
      <h1 className="text-5xl font-extrabold text-primary drop-shadow-lg neon-glow">
        BPS
      </h1>
      <p className="text-xl text-light mt-4 opacity-80">
        블록체인 기반의 가위바위보 게임
      </p>
      <button
        onClick={() => navigate("/gameLobby")}
        className="mt-8 px-8 py-4 bg-secondary/90 text-white rounded-xl text-xl font-semibold shadow-lg hover:bg-accent/80 transition-all duration-300 neon-border backdrop-blur-md"
      >
        start
      </button>
    </div>
  );
}

export default App;
