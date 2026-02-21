import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div style={styles.wrapper}>
      <Navbar />
      <main style={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    flex: 1,
    width: "100%",
    margin: "0 auto",
    padding: "2rem",
  },
};
