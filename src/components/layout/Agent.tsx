import styles from "@/styles/layout/Agent.module.scss";
import { agentType } from "@/_types/agentTypes";
import { Rubik_Glitch } from "next/font/google";
import Img from "../utils/Img";
import Link from "next/link";

const font = Rubik_Glitch({ subsets: ["latin-ext"], weight: ["400"] });

interface PropsType {
  agent: agentType;
}

export default function Agent(props: PropsType) {
  const { agent } = props;

  const colorAgent = agent.backgroundGradientColors
    .map((color) => `#${color}`)
    .join(",");
  const backgroundAgent = `linear-gradient(45deg, ${colorAgent})`;

  return (
    <Link href={`/agents/${agent.uuid}`} className={styles.agent}>
      <div
        className={styles.agent_background}
        style={{ background: backgroundAgent }}
      />
      <figure className={styles.agent_image}>
        <Img
          src={agent.fullPortrait}
          alt=""
          styles={{ objectFit: "contain" }}
        />
      </figure>
      <figure className={styles.agent_background_name}>
        <Img src={agent.background} alt="" styles={{ objectFit: "contain" }} />
      </figure>
      <figure className={styles.agent_role}>
        <Img
          src={agent.role.displayIcon}
          alt=""
          styles={{ objectFit: "contain" }}
        />
      </figure>
      <div className={`${styles.agent_title} ${font.className}`}>
        <p>{agent.displayName}</p>
      </div>
    </Link>
  );
}
