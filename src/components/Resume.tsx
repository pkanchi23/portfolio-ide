import styles from './Resume.module.css';

export default function Resume() {
    const experience = [
        {
            role: 'Senior Software Engineer',
            company: 'Tech Corp',
            period: '2022 - Present',
            description: 'Leading frontend architecture and specialized in performance optimization for high-traffic applications.',
        },
        {
            role: 'Software Engineer',
            company: 'StartUp Inc',
            period: '2019 - 2022',
            description: 'Full-stack development using React and Node.js. Shipped 3 major products from zero to one.',
        },
    ];

    return (
        <section id="about" className={`container ${styles.section}`}>
            <h2 className={styles.heading}>Experience</h2>
            <div className={styles.list}>
                {experience.map((job, index) => (
                    <article key={index} className={styles.item}>
                        <div className={styles.header}>
                            <h3 className={styles.role}>{job.role}</h3>
                            <span className={styles.company}>{job.company}</span>
                            <span className={styles.period}>{job.period}</span>
                        </div>
                        <p className={styles.description}>{job.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
