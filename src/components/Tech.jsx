import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { technologies } from "../contants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
            <div className="w-28 h-28" key={tech.name}> 
                <BallCanvas icon={tech.icon} />
            </div>
        ))}
      <h2 className={styles.heading}>Technologies</h2>
      <div className={styles.techList}>
        {technologies.map((tech) => (
          <BallCanvas key={tech.name} icon={tech.icon} />
        ))}
      </div>
    </div>
  );
};

export default  SectionWrapper(Tech, "");
``