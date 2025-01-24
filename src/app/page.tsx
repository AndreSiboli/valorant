"use client";
import styles from "./page.module.scss";
import { useEffect } from "react";
import { getAllMaps } from "@/services/mapsService";
import { getAllAgents } from "@/services/agentsService";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { storeMaps } from "@/redux/slices/mapsSlice";
import { storeAgents } from "@/redux/slices/agentsSlice";

import Map from "@/components/layout/Map";
import Agent from "@/components/layout/Agent";
import Img from "@/components/utils/Img";
import logo from '@/assets/logo.png'

export default function Home() {
  const dispatch = useDispatch();
  const { maps } = useSelector((state: RootState) => state.maps);
  const { agents } = useSelector((state: RootState) => state.agents);

  async function getMaps() {
    const res = await getAllMaps();
    if (!res) return;
    dispatch(storeMaps(res));
  }
  async function getAgents() {
    const res = await getAllAgents();
    if (!res) return;
    dispatch(storeAgents(res));
  }

  function deleteScrollBody() {
    document.body.style.overflow = "hidden";
  }

  useEffect(() => {
    deleteScrollBody();
    getMaps();
    getAgents();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.page_container}>
        {agents && maps ? (
          <>
            <div className={styles.page_maps}>
              {maps.map((map) => (
                <Map map={map} key={map.uuid} />
              ))}
            </div>

            <div className={styles.page_agents}>
              <div className={styles.page_agents_container}>
                {agents.map((agent) => (
                  <Agent agent={agent} key={agent.uuid} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className={styles.page_loading}>
            <figure className={styles.loading_logo}>
              <Img src={logo}/>
            </figure>
            <div className={styles.loading}/>
          </div>
        )}
      </div>
    </div>
  );
}
