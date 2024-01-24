const min = {
  0: () => '',
  1: (m) => `${m} minute `,
  2: (m) => `${m} minutes `,
  3: (m) => `${m} minutes `,
};

export const parser = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);
  return `${min[minutes](minutes)}${seconds === 0 ? '' : `${seconds} seconds`}`;
};
