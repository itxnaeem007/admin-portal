import { makeStyles } from "@material-ui/core/styles";
const useStylePanel = makeStyles((theme) => ({
  root: {
    backgroundColor: '#04633b',
    minHeight: "100vh",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.typography.pxToRem(15),
  },
}));
export { useStylePanel };
