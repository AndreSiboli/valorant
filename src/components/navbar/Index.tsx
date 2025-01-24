import styles from "@/styles/navbar/Index.module.scss";
import Img from "../utils/Img";
import logo from "@/assets/logo.png";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <figure className={styles.header_logo}>
        <Img src={logo} alt="Logo" />
      </figure>
    </header>
  );
}
