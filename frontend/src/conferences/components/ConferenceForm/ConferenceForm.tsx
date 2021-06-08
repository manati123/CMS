import { useStyles } from "./styles";
import {Conference} from "../../../models/Conference";
import Grid from '@material-ui/core/Grid';
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Button, Card, CardActions, Input, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {createConferenceThunk} from "../../thunks";

type Props = {};
type FormInputs = {
    name: string;
    proposalDeadline: string;
    reviewDeadline: string;
};

const ConferenceForm = (props : Props) => {
    const { register, handleSubmit, errors } = useForm<FormInputs>();
    const classes = useStyles();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [proposalDeadline, setProposalDeadline] = useState('2021-06-01T10:30');
    const [reviewDeadline, setReviewDeadline] = useState('2021-06-02T10:30');

    const handleNewConference = () => {
        console.log(proposalDeadline, reviewDeadline);
        const proposalDeadlineTimestamp = new Date(proposalDeadline).getTime();
        const reviewDeadlineTimestamp = new Date(reviewDeadline).getTime();
        console.log(proposalDeadlineTimestamp, reviewDeadlineTimestamp);
        dispatch(createConferenceThunk(name, proposalDeadlineTimestamp, reviewDeadlineTimestamp));
    };

    return <Card className={classes.card} raised><form
        onSubmit={handleSubmit(handleNewConference)}
        id="conference-form"
        className={classes.myForm}
    >
        <Grid container direction="column" spacing={3}>
            <Grid item>
                <TextField
                    required
                    id="name"
                    name="name"
                    label="Conference name"
                    fullWidth
                    onChange={(e) => setName(e.target.value)}
                />
            </Grid>
            <Grid item>
                <TextField
                    required
                    id="proposal-deadline"
                    label="Proposal deadline"
                    type="datetime-local"
                    defaultValue="2021-06-01T10:30"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setProposalDeadline(e.target.value)}
                />
            </Grid>
            <Grid item>
                <TextField
                    required
                    id="review-deadline"
                    label="Review deadline"
                    type="datetime-local"
                    defaultValue="2021-06-02T10:30"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setReviewDeadline(e.target.value)}
                />
            </Grid>
            <Grid item>
                <Button
                    color="primary"
                    fullWidth
                    variant="contained"
                    size="medium"
                    type="submit"
                    form="conference-form"
                >
                    Create conference
                </Button>
            </Grid>
        </Grid>
    </form>
    </Card>
}

export default ConferenceForm;
