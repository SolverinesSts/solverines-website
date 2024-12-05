import styles from "./page.module.css";
import Homes from "./home/page";
export default function Home() {
  return (
    <div className={styles.page}>
      <Homes/>
    </div>
  );
}
