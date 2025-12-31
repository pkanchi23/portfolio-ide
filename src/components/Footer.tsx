import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.content}`}>
                <div className={styles.socials}>
                    {/* Placeholder Social Links - Icons can be added later */}
                    <a href="#" className={styles.socialLink}>LinkedIn</a>
                    <a href="#" className={styles.socialLink}>GitHub</a>
                    <a href="#" className={styles.socialLink}>Twitter</a>
                </div>
                <p className={styles.copy}>
                    © {currentYear} [Your Name]. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
