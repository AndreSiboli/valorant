"use client";

import styles from "@/styles/pages/Agent.module.scss";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { agentType } from "@/_types/agentTypes";
import { getAnSpecificAgent } from "@/services/agentsService";
import Hero from "@/components/pages/agents/Hero";
import Abilities from "@/components/pages/agents/Abilities";

export default function Agents() {
  const params = useParams();
  const { agents } = useSelector((state: RootState) => state.agents);
  const [agent, setAgents] = useState<agentType | null>(null);

  function getAgent() {
    const filter = agents.filter((agent) => agent.uuid === params.id);
    if (filter.length) return setAgents(filter[0]);
    requestAgent();
  }

  async function requestAgent() {
    const res = await getAnSpecificAgent(params.id as string);
    setAgents(res);
  }

  useEffect(() => {
    getAgent();
  }, []);

  return (
    <div className={styles.agents}>
      {agent ? (
        <div>
          <Hero agent={agent} />
          <Abilities agent={agent} />
        </div>
      ) : (
        <>Loading</>
      )}
    </div>
  );
}
