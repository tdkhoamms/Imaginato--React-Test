import React, { useState, useEffect } from 'react';

import { ItemScore } from './ItemCompontents';

const Score = ({ score }) => {
  const [num, setNum] = useState(score);
  useEffect(() => {
    let i = 10;
    const interval = setInterval(() => {
      i -= 1;
      setNum((n) => Math.floor(n + (score - n) / 10));
      if (i <= 0) {
        setNum(score);
        clearInterval(interval);
      }
    }, 50);
  }, [score]);
  return <ItemScore>{num}pt</ItemScore>;
};

export default Score;
