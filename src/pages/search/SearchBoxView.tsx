import {Button, Stack, TextField} from "@mui/material";
import React, {ReactElement} from "react";

export type SearchBoxViewProps = {
    onSearchTermChange: (term: string) => void | null;
    onSearchRequested: () => Promise<void> | null;
}
export function SearchBoxView(props: SearchBoxViewProps) : ReactElement {

    return (
    <Stack direction="row">
        <TextField
            id="outlined-basic"
            label="Search for an article"
            variant="outlined"
            onChange={(e) => props?.onSearchTermChange(e.target.value)}
        />
        <Button
            style={ButtonStyle}
            sx={{ marginLeft: 2 }}
            variant="contained"
            onClick={(e) => props?.onSearchRequested()}
        >
            Search
        </Button>
    </Stack>
    );
}

const ButtonStyle = {
    backgroundColor: '#3f51b5',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#3f51b5',
        color: '#fff',
    },
};
