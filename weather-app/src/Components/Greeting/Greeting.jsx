import React, { useEffect } from "react";
import { useState } from "react";

const Greeting = () => {
  const [time, setTime] = useState(new Date().getHours());
  const [greeting, setGreeting] = useState("");

  const getGreeting = () => {
    if (time > 5 && time < 12) {
      setGreeting("Good morning!");
    } else if ((time >= 12) & (time < 17)) {
      setGreeting("Good afternoon!");
    } else if (time >= 17 && time < 22) {
      setGreeting("Good evening");
    } else if (time >= 22 && time < 5) {
      setGreeting("Good night");
    }
  };

  useEffect(() => {
    getGreeting();
  }, [greeting]);

  return <div className="greeting-container">{greeting}</div>;
};

export default Greeting;
