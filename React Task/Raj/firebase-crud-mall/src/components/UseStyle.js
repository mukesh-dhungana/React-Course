import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 3,
    height: "100%",
    paddingTop: theme.spacing(5),
    width: "60vw",
    marginLeft: "270px",
  },
  button: {
    width: "50px",
    display: "flex",
    justifyContent: "inherit",
    alignItems: "",
    fontSize: "15px",
    color: "black",
  },
}));
