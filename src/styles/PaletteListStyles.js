export default {
  root: {
    backgroundColor: "purple",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "65%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    fontSize: "1rem",
  },
  palettes: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};
