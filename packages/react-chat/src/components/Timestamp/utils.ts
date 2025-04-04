export const formatTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours % 24 }:${minutes >= 10 ? '' : '0'}${minutes}`;
};
