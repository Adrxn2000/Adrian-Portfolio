import BallsCanvas from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { technologies } from "../contants";

const Tech = () => {
  return (
    <div className="w-full h-[400px]">
      <h2 className={styles.heading}>Technologies</h2>
      <div className="w-full h-full">
        <BallsCanvas balls={technologies} />
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
