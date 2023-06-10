import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  root: {
    padding: "0.8rem 3rem",
    width: "100%",
    textTransform: "capitalize",
    fontSize: theme.typography.pxToRem(18),
    borderRadius: "3px",
    marginTop: 20,
  },
  container: {
    marginTop: "20px",
  },
  link: {
    cursor: "pointer",
    marginTop: 20,
  },
  main: {
    width: "100%",
  },
}));
export { useStyle };
