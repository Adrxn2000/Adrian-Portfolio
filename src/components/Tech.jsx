// src/components/Tech.jsx
import BallsGrid from "./canvas/ballsGrid";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { technologies } from "../contants";

const Tech = () => {
  return (
    <div className="w-full">
      <h2 className={styles.heading}>Technologies</h2>
      <BallsGrid balls={technologies} columns={4} />
    </div>
  );
};

export default SectionWrapper(Tech, "");
