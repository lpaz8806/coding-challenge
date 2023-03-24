import {ProductListItem} from "../../types/ProductListItem";
import React, {ReactElement} from "react";
import {Box, Paper} from "@mui/material";

export type ProductListViewProps = {
    product: ProductListItem | null
}
export function ProductPreviewView(props: ProductListViewProps): ReactElement {
    if (!props.product)
        return <></>;

    return (
        <Box marginTop={2}>
            <Paper sx={{ padding: 2 }}>
                <strong>{props.product.title}</strong>
                <p>{props.product.description}</p>
                <p style={{ float: 'right'}}>{props.product.price}</p>
                <div style={{ clear: 'both'}}></div>
            </Paper>
        </Box>)
}