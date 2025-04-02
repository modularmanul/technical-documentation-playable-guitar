function play(audioSrc) {
  const audio = new Audio(audioSrc);
  audio.play().catch((e) => console.error("Error playing audio:", e));
}
