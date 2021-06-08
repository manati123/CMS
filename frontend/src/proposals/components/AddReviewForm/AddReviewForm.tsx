import React, {ChangeEvent, useState} from "react";
import {ReviewResult} from "../../../models/Review";
import Grid from "@material-ui/core/Grid";
import {Box, Button, Card, InputLabel, MenuItem, Paper, TextField, Typography} from "@material-ui/core";
import {useStyles} from "./styles";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import Select from '@material-ui/core/Select';
import {createConferenceThunk} from "../../../conferences/thunks";
import {addReviewThunk} from "../../thunks";
import {getCurrentUserId} from "../../../account/selectors";


type Props = {
    proposalId: number;
};

type FormInputs = {
    comment: string;
    verdict: ReviewResult;
}

const AddReviewForm = ({proposalId}: Props) => {
    const { register, handleSubmit, errors } = useForm<FormInputs>();
    const classes = useStyles();
    const dispatch = useDispatch();

    //const [comment, setComment] = useState('Comment');
    const [result, setResult] = useState(ReviewResult.ACCEPT);

    const userId = useSelector(getCurrentUserId);
    const handleNewReview = () => {
        dispatch(addReviewThunk(proposalId, {reviewId: 1, reviewerId: userId!,result: result}));
    }

    return <Paper elevation={2}><Box padding={2}><form>
        <Typography variant="h6">Add review</Typography>
        <Grid container direction="column" spacing={3}>
            <Grid item>
                <InputLabel htmlFor="result">Result</InputLabel>
                <Select
                    id="result"
                    onChange={(e) => setResult(e.target.value as ReviewResult)}
                >
                    <MenuItem value={ReviewResult.STRONG_ACCEPT}>Strong accept</MenuItem>
                    <MenuItem value={ReviewResult.ACCEPT}>Accept</MenuItem>
                    <MenuItem value={ReviewResult.BORDERLINE_PAPER}>Borderline</MenuItem>
                    <MenuItem value={ReviewResult.WEAK_REJECT}>Weak reject</MenuItem>
                    <MenuItem value={ReviewResult.REJECT}>Reject</MenuItem>
                </Select>
            </Grid>
            <Grid item>
                <Button
                    color="primary"
                    fullWidth
                    variant="contained"
                    size="medium"
                    type="submit"
                    form="review-form"
                >
                    Submit review
                </Button>
            </Grid>
        </Grid>
    </form>
    </Box>
    </Paper>
}

export default AddReviewForm;
