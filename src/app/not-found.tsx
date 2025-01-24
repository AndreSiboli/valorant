import Link from "next/link";
import styles from "./not-found.module.scss";
import Container from "@/components/layout/Container";
import { FaArrowLeft } from "react-icons/fa6";

export default function Error404() {
  return (
    <div className={styles.not_found}>
      <Link href="/">
        <FaArrowLeft />
        Back
      </Link>
      <Container>
        <div className={styles.not_found_container}>
          <h1>404.</h1>
          <p>Currently, only agents has a page.</p>
        </div>
      </Container>
    </div>
  );
}
