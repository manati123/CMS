import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    typography: {
        fontWeight: 700,
        fontSize: theme.typography.fontSize * 0.9,
    },
    ul: {
        listStyle: "none",
        alignItems: "left"
    }
}));
