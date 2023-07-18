import React from "react";

const useDataRepeat = <T>(randomData: T[], ms?: number) => {
  const [data, setData] = React.useState<T>(randomData[0]);
  const [startIndex, setStartIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setData(randomData[startIndex]);
      setStartIndex((startIndex + 1) % randomData.length);
    }, ms || 1000);

    return () => clearInterval(interval);
  }, [randomData, ms, startIndex]);

  return data;
};

export default useDataRepeat;
