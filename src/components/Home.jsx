import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Home Page</h1>
      <h2>Welcome to my website </h2>
      <p>This is a simple home component created in React JS.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  title: {
    color: "#333",
  },
};

export default Home;