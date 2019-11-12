import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";

import Link from "next/link";

const Index = props => {
  const [hero, setHero] = useState(undefined);

  async function getHero(id) {
    const result = await fetch(`${process.env.SELF_URL}/api/hero/${id}`);
    const hero = await result.json();
    return hero;
  }

  useEffect(() => {
    const id = Math.floor(Math.random() * (731 - 1) + 1);
    getHero(id).then(res => {
      if (res.response === "success") {
        setHero({ ...res });
      }
    });
  }, []);

  return (
    <div>
      Super Showdown
      {hero && <h1>{hero.name}</h1>}
    </div>
  );
};

export default Index;
