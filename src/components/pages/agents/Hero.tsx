"use client";

import { agentType } from "@/_types/agentTypes";
import Container from "@/components/layout/Container";
import Img from "@/components/utils/Img";
import styles from "@/styles/pages/agents/Hero.module.scss";
import { useEffect, useState } from "react";
import { Rubik_Glitch } from "next/font/google";

const font = Rubik_Glitch({ subsets: ["latin-ext"], weight: ["400"] });

interface PropsType {
  agent: agentType;
}

export default function Hero(props: PropsType) {
  const { agent } = props;
  const [background, setBackground] = useState(`linear-gradient(45deg, #000)`);

  function makingGradient() {
    if (!agent) return;

    const colorAgent = agent.backgroundGradientColors
      .map((color) => `#${color}`)
      .join(",");
    setBackground(`linear-gradient(-135deg, ${colorAgent})`);
  }

  useEffect(() => {
    makingGradient();
  }, [agent]);

  return (
    <div className={styles.agent} style={{ background: background }}>
      <Container>
        <div className={styles.agent_container}>
          <div className={styles.agent_wrapper}>
            <figure className={styles.agent_portrait}>
              <Img src={agent.fullPortrait} alt="" />
            </figure>
            <div className={styles.agent_info}>
              <div className={styles.info_wrapper}>
                <div className={styles.info_title}>
                  <h1 className={font.className}>{agent.displayName}</h1>
                  <figure title={agent.role.displayName}>
                    <Img
                      src={agent.role.displayIcon}
                      alt={agent.role.displayName}
                    />
                  </figure>
                </div>
                <div className={styles.info_description}>
                  <p>{agent.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
