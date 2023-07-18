import React from "react";

interface IUseRandom {
  <T>(randomData: T[]): T;
}

const useRandom: IUseRandom = (randomData) => {
  const [data, setData] = React.useState(randomData[0]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setData(randomData[Math.floor(Math.random() * randomData.length)]);
    }, 1000);

    return () => clearInterval(interval);
  }, [randomData]);

  return data;
};

export default useRandom;
