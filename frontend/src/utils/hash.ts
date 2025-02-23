import { Buffer } from "buffer";
import { keccak256 } from "ethers";

export const generateMoveHash = (move: string) => {
  const input = move;
  const buffer = Buffer.from(input, "utf-8");
  return keccak256(buffer);
};
