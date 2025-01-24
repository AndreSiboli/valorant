import styles from "@/styles/layout/Map.module.scss";
import Img from "../utils/Img";
import Link from "next/link";
import { Rubik_Glitch } from "next/font/google";
import { mapsTypes } from "@/_types/mapsTypes";

const font = Rubik_Glitch({ subsets: ["latin-ext"], weight: ["400"] });

interface PropsType {
  map: mapsTypes;
}

export default function Map(props: PropsType) {
  const { map } = props;

  return (
    <Link href={`/maps/${map.uuid}`} className={styles.map}>
      <figure className={styles.map_image}>
        <Img src={map.splash} alt="" />
      </figure>
      <div className={`${styles.map_title} ${font.className}`}>
        <p>{map.displayName}</p>
      </div>
    </Link>
  );
}
