import { useEffect, useState } from "react";
import { SkillsProps } from "./skills.types";

export const Skills = (props: SkillsProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggenIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggenIn(true);
    }, 500);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>

      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggenIn(true)}>Login</button>
      )}
    </>
  );
};
