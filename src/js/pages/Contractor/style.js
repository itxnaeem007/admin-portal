import { makeStyles } from "@material-ui/core/styles";
const useStylePanel = makeStyles((theme) => ({
  root: {
    display : 'flex',
    flexDirection: "row",  
  },
  flex: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.typography.pxToRem(15),
  },
}));
export { useStylePanel };
