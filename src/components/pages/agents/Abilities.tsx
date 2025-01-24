"use client";

import { agentType } from "@/_types/agentTypes";
import Container from "@/components/layout/Container";
import Img from "@/components/utils/Img";
import styles from "@/styles/pages/agents/Abilities.module.scss";
import { useEffect, useState } from "react";

interface PropsType {
  agent: agentType;
}

export default function Abilities(props: PropsType) {
  const { agent } = props;
  const [selectedAbility, setSelectedAbility] = useState({});

  function firstAbilityLoad() {
    if (!agent) return;
    selectAbility(agent.abilities[0].slot);
  }

  function selectAbility(ability: string) {
    if (!agent) return;
    setSelectedAbility(ability);
  }

  useEffect(() => {
    firstAbilityLoad();
  }, [agent]);

  return (
    <div className={styles.abilities}>
      <Container>
        <div className={styles.abilities_container}>
          <div className={styles.abilities_icons}>
            {agent.abilities.map((ability) => (
              <div
                className={styles.icons}
                onClick={() => selectAbility(ability.slot)}
                key={ability.slot}
              >
                <figure
                  className={`${styles.icon} ${
                    selectedAbility === ability.slot && styles.selected
                  }`}
                >
                  <Img src={ability.displayIcon} />
                </figure>
              </div>
            ))}
          </div>
          <div className={styles.abilities_ability}>
            {agent.abilities.map((ability) => (
              <div
                className={`${styles.ability} ${
                  selectedAbility === ability.slot
                    ? styles.visible
                    : styles.invisible
                }`}
                key={ability.slot}
              >
                <div className={styles.ability_name}>
                  <h2>{ability.displayName}</h2>
                </div>
                <div className={styles.ability_description}>
                  <p>{ability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
