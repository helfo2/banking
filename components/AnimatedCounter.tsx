"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <p className="w-full">
      <CountUp end={amount} decimal="," prefix="€ " decimals={2} />
    </p>
  );
};

export default AnimatedCounter;
