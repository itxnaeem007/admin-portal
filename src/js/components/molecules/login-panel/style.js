import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  textRoot: {
    fontWeight: 300,
    letterSpacing: 0.5,
    margin: "10px 0",
  },
  logoRoot: {
    fontWeight: 400,
    letterSpacing: 10,
  },
  buttonRoot: {
    padding: "0.5rem 3.5rem",
    textTransform: "capitalize",
    fontSize: theme.typography.pxToRem(15),
    borderRadius: "50px",
    marginTop: "10px",
  },
  logo: {
    width: 210,
    margin: 20,
  },
}));
export { useStyle };
