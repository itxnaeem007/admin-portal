import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  logo: {
    width: 110,
  },
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    padding: theme.typography.pxToRem(8),
    textTransform: 'uppercase !important',
    paddingLeft: theme.typography.pxToRem(40),
    //paddingRight: theme.typography.pxToRem(40),
    boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  btn: {
    padding: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: '#04633b',
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 2.5),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
    marginTop: 10,
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    backgroundColor: "#eaeaea",
    minHeight: "100vh",
    paddingTop: theme.typography.pxToRem(60),
    paddingLeft: theme.typography.pxToRem(40),
    paddingRight: theme.typography.pxToRem(40),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
export { useStyles };
