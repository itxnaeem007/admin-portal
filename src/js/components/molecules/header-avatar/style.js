import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    label: {
      marginLeft: theme.typography.pxToRem(10),
    },
  };
});
export { useStyle };
