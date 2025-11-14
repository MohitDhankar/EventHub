import confetti from "canvas-confetti";

export const fireConfetti = () => {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
    colors: ["#a78bfa", "#60a5fa", "#c084fc"],
  });
};
