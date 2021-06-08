import { makeStyles } from "@material-ui/core";
import background from "../../assets/cool-background.svg";

export const useStyles = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${background})`,
    backgroundColor: "rgb(215, 242, 255)",
    objectFit: "fill",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  card: {
    maxWidth: 500,
    marginBottom: "15%",
    padding: 10,
  },
});
