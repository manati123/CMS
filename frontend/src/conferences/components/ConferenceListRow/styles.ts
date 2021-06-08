import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    clickable: {
        cursor: "pointer",
    },
    pastDate: {
        color: 'red',
    },
    futureDate: {
        color: 'green',
    }
}));
