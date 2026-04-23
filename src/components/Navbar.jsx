import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyWebsite</h2>

      <ul style={styles.list}>
        <li style={styles.item}>Home</li>
        <li style={styles.item}>About</li>
        <li style={styles.item}>Services</li>
        <li style={styles.item}>Contact</li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  list: {
    display: "flex",
    listStyle: "none",
    gap: "15px",
  },
  item: {
    cursor: "pointer",
  },
};

export default Navbar;