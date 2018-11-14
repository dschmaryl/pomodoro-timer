export const getMillisecs = (minutes, seconds = 0) =>
  minutes * 60000 + seconds * 1000;

export const getMin = milliseconds => Math.floor(milliseconds / 60000);
export const getSec = milliseconds => Math.floor((milliseconds % 60000) / 1000);

export const getMinSecs = milliseconds => ({
  minutes: getMin(milliseconds),
  seconds: getSec(milliseconds)
});
