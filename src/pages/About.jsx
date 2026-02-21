import { motion } from "motion/react";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div style={styles.container}>
      
      {/* Quiénes Somos (New Hero Area) */}
      <motion.section style={styles.heroTextSection} initial="hidden" animate="visible" variants={fadeUp}>
        <h1 style={styles.heroTitle}>Quiénes Somos</h1>
        <p style={styles.heroTextBody}>
          Somos un equipo ágil de expertos en tecnología, operadores y creadores que colaboran con empresas ambiciosas para avanzar más rápido, escalar con inteligencia, y mantenerse a la vanguardia, sosteniendo ese impulso.
        </p>
      </motion.section>
      {/* Main Content Area */}
      <div style={styles.contentWrapper}>
        
        {/* Qué Hacemos */}
        <motion.section style={styles.textSection} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>
          <h4 style={styles.subtitle}>QUÉ HACEMOS</h4>
          <h2 style={styles.sectionTitle}>Resultados que crean<br/>ventajas competitivas.</h2>
          <p style={styles.textBody}>
            Aprovechamos el potencial de los datos, la IA y la ingeniería digital en una amplia gama de industrias. Creamos soluciones innovadoras que realmente impulsan el progreso.
          </p>
        </motion.section>

        {/* Cómo Lo Hacemos */}
        <motion.section style={styles.textSection} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>
          <h4 style={styles.subtitle}>CÓMO LO HACEMOS</h4>
          <h2 style={styles.sectionTitle}>No nos limitamos a crear estrategias, <span style={styles.highlightDark}>las ejecutamos.</span></h2>
          <p style={styles.textBody}>
            Desde la estrategia hasta la entrega, estamos involucrados en cada paso. Empezamos con un propósito, estamos donde se ejecutan las ideas, y no nos detenemos en el plan: nos quedamos para construir.
          </p>
        </motion.section>

        {/* Fundadores */}
        <motion.section style={styles.sectionCard} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>
          <p style={styles.textBodyLarge}>
            Nuestra empresa fue fundada por operadores y creadores. Personas que han modernizado sistemas heredados en empresas globales, lanzado startups desde cero y escalado todo lo que hay en el medio. Sabemos cómo aprovechar los datos, la IA y el software no solo para optimizar, sino para impulsar un crecimiento real, compuesto y significativo.
          </p>
          <button style={styles.buttonOutline}>LEER LA HISTORIA DE LOS FUNDADORES</button>
        </motion.section>

        {/* Diferenciadores */}
        <motion.section style={styles.textSection} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>
          <h2 style={styles.sectionTitle}>¿Qué nos hace diferentes?</h2>
          
          <div style={styles.featuresList}>
            <div style={styles.featureItem}>
              <h3 style={styles.featureTitle}>Estrategia ejecutada</h3>
              <p style={styles.textBodySmall}>
                Combinamos la claridad estratégica con la acción decisiva. Ya sea dando forma a nuevas ideas o ampliando las ya probadas, pasamos rápidamente de la reflexión a la acción.
              </p>
            </div>
            <div style={styles.featureItem}>
              <h3 style={styles.featureTitle}>Aportamos una gran experiencia operativa</h3>
              <p style={styles.textBodySmall}>
                Nuestro equipo sabe lo que hace falta porque lo hemos hecho. Con décadas de experiencia en salas de juntas y despachos, aportamos un pragmatismo fuera de lo común, transformando la complejidad en claridad con rapidez y precisión.
              </p>
            </div>
          </div>
        </motion.section>

      </div>

      {/* Nuestra Perspectiva (Full Width Banner) */}
      <motion.section style={styles.bannerCenter} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>
        <h4 style={styles.subtitleCenter}>NUESTRA PERSPECTIVA</h4>
        <h2 style={styles.bannerTitle}>
          Si necesitas desenredar la complejidad, aprovechar una oportunidad o simplemente salir del estancamiento, estamos aquí para trabajar a tu lado.<br/>
          No como consultores, sino <span style={styles.highlightDark}>como socios.</span>
        </h2>
        <button style={styles.buttonSolid}>HABLEMOS →</button>
      </motion.section>

      {/* Mapa / Presencia (Text Only Variant) */}
      <motion.section style={styles.sectionCenter} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>
        <h2 style={styles.sectionTitleCenter}>Expertos mundiales, zonas horarias locales.</h2>
        <p style={{...styles.textBody, textAlign: 'center', maxWidth: "600px"}}>
          Desde nuestra oficina central en Denver hasta nuestras sedes en Guadalajara, Ciudad de México, Miami, Medellín, Lima, Brasil y Buenos Aires.
        </p>
      </motion.section>

    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "6rem",
    paddingBottom: "4rem",
  },
  contentWrapper: {
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "6rem",
    padding: "0 1.5rem",
  },
  heroTextSection: {
    padding: "6rem 1.5rem 2rem",
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  heroTitle: {
    color: "var(--brand-primary)",
    fontSize: "clamp(3rem, 6vw, 5rem)",
    fontWeight: "800",
    letterSpacing: "-1px",
    margin: 0,
    lineHeight: "1.1",
  },
  heroTextBody: {
    color: "var(--text-muted)",
    fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
    lineHeight: "1.6",
    fontWeight: "400",
    margin: 0,
  },
  textSection: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  subtitle: {
    color: "var(--text-muted)",
    letterSpacing: "2px",
    fontSize: "0.85rem",
    fontWeight: "600",
    textTransform: "uppercase",
    margin: 0,
  },
  sectionTitle: {
    color: "var(--text-main)",
    fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
    fontWeight: "700",
    margin: 0,
    lineHeight: "1.2",
  },
  highlightDark: {
    color: "var(--brand-primary)",
  },
  textBody: {
    color: "var(--text-muted)",
    fontSize: "1.15rem",
    lineHeight: "1.8",
    margin: 0,
  },
  sectionCard: {
    backgroundColor: "var(--bg-secondary)",
    borderRadius: "24px",
    padding: "3.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "2rem",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05)",
  },
  textBodyLarge: {
    color: "var(--text-main)",
    fontSize: "1.25rem",
    lineHeight: "1.7",
    fontWeight: "500",
    margin: 0,
  },
  buttonOutline: {
    backgroundColor: "transparent",
    color: "var(--brand-primary)",
    border: "2px solid var(--accent)",
    padding: "12px 28px",
    borderRadius: "30px",
    fontWeight: "700",
    fontSize: "0.85rem",
    letterSpacing: "1px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  featuresList: {
    display: "flex",
    flexDirection: "column",
    gap: "2.5rem",
    marginTop: "1.5rem",
  },
  featureItem: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    borderLeft: "4px solid var(--accent)",
    paddingLeft: "1.5rem",
  },
  featureTitle: {
    color: "var(--brand-primary)",
    fontSize: "1.35rem",
    fontWeight: "700",
    margin: 0,
  },
  textBodySmall: {
    color: "var(--text-muted)",
    fontSize: "1.05rem",
    lineHeight: "1.6",
    margin: 0,
  },
  bannerCenter: {
    backgroundColor: "var(--bg-secondary)",
    padding: "6rem 2rem",
    borderRadius: "24px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    margin: "0 1.5rem", // Add some margin so it doesn't touch the extremely far edges if screen is huge
  },
  subtitleCenter: {
    color: "var(--text-muted)",
    letterSpacing: "2px",
    fontSize: "0.85rem",
    fontWeight: "600",
    margin: 0,
    textTransform: "uppercase",
  },
  bannerTitle: {
    color: "var(--text-main)",
    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
    fontWeight: "500",
    lineHeight: "1.4",
    maxWidth: "900px",
    margin: 0,
  },
  buttonSolid: {
    backgroundColor: "var(--accent)",
    color: "var(--brand-primary)",
    border: "none",
    padding: "16px 40px",
    borderRadius: "30px",
    fontWeight: "700",
    fontSize: "1rem",
    letterSpacing: "1px",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },
  sectionCenter: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5rem",
    padding: "0 1.5rem",
  },
  sectionTitleCenter: {
    color: "var(--text-main)",
    fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
    fontWeight: "700",
    margin: 0,
    textAlign: "center",
  }
};
