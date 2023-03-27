import {ProductListItem} from "../../types/ProductListItem";
import React, {ReactElement} from "react";
import {Avatar, Box, List, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

export type ProductListViewProps = {
    items: Array<ProductListItem>;
    onProductSelected: (product: ProductListItem) => void;
}
export function ProductListView(props: ProductListViewProps): ReactElement {
    if(props.items.length == 0)
        return <Box>No results</Box>

    const listItems = props.items.map(item => (
        <ListItemButton
            key={item.id}
            component={'li'}
            onClick={() => props.onProductSelected(item)}
        >
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={item.title}
                secondary={item.description} />
        </ListItemButton>
    ));

    return (<List>{listItems}</List>)
}