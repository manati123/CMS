import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from "@material-ui/core";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { useStyles } from "./styles";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {}

const ProposalPdf = (props: Props) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const classes = useStyles();
  const theme = useTheme();
  function onDocumentLoadSuccess(numPages: number) {
    setNumPages(numPages);
  }

  const [url, setUrl] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files!;
    console.log(files);
    files.length > 0 && setUrl(URL.createObjectURL(files[0]));
  };

  return (
    <Paper elevation={1}>
      <Box padding={2}>
        <Grid container direction="column" spacing={2}>
          <Grid item container justify="center">
            <Button variant="contained" color="primary" component="label">
              Upload File
              <input type="file" accept=".pdf" hidden onChange={onChange} />
            </Button>
          </Grid>
          <Grid item container justify="center">
            <Box
              padding={2}
              border={2}
              borderColor={theme.palette.primary.main}
            >
              <Document
                file={url}
                onLoadSuccess={(pdf) => onDocumentLoadSuccess(pdf.numPages)}
              >
                <Page pageNumber={pageNumber} />
              </Document>
            </Box>
          </Grid>
          {url !== "" ? (
            <Grid item container alignItems="center" justify="center">
              <IconButton
                onClick={() =>
                  setPageNumber(pageNumber > 1 ? pageNumber - 1 : pageNumber)
                }
              >
                <ArrowLeftIcon />
              </IconButton>
              <Typography>
                Page {pageNumber} of {numPages}
              </Typography>

              <IconButton
                onClick={() =>
                  setPageNumber(
                    numPages! > pageNumber ? pageNumber + 1 : pageNumber
                  )
                }
              >
                <ArrowRightIcon />
              </IconButton>
            </Grid>
          ) : null}
        </Grid>
      </Box>
    </Paper>
  );
};

export default ProposalPdf;
