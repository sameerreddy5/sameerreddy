import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./about.module.css";

export default function About() {
    return (
        <main>
            <Navbar />
            <section className="section-padding">
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h1 className={styles.title}>About Me</h1>
                        <div className={styles.underline}></div>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.profileImageWrapper}>
                            <Image
                                src="/profile.jpg"
                                alt="Tamalampudi Sameer Reddy"
                                width={500}
                                height={500}
                                className={styles.profileImage}
                            />
                        </div>

                        <div className={styles.aboutContent}>
                            <h2>Tamalampudi Sameer Reddy</h2>
                            <p className={styles.subtitle}>
                                Digital Storyteller | Ubalanka, Konaseema, AP
                            </p>

                            <p>
                                Hello! I am Tamalampudi Sameer Reddy, a passionate digital storyteller and educational creator hailing from the beautiful village of Ubalanka in the Konaseema district of Andhra Pradesh.
                            </p>
                            <p>
                                I believe in the power of consistency and clarity. In a world full of noise, I strive to create content that brings focus and value. My mission is to simplify complex ideas and inspire action through discipline and growth.
                            </p>
                            <p>
                                Whether I'm sharing insights on video editing, exploring AI tools, or simply documenting the journey of self-improvement, my goal remains the same: <strong>No noise. Only growth.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
