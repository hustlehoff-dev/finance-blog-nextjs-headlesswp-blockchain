import styles from "@/components/footer/footer.module.scss";

export function Footer() {
  return (
    <footer id={styles.footer}>
      Footer
      <div className={styles.copyright}>ComeinCrypto C 2025</div>
    </footer>
  );
}
