export const getMinutes = (time: number) => {
  const minutes = Math.floor(time / 60);
  return minutes.toString().padStart(2, "0");
};

export const getSeconds = (time: number) => {
  const minutes = time % 60;
  return minutes.toString().padStart(2, "0");
};
