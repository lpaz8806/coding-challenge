import {Box, Grid, Typography} from '@mui/material';
import { Observer } from 'mobx-react-lite';
import React, {ReactElement} from 'react';
import { withInstances } from '../../utils/withInstances';
import {ProductListView} from "./ProductListView";
import {SearchBoxView} from "./SearchBoxView";
import {ProductPreviewView} from "./ProductPreviewView";
import SearchViewModelType from "../../types/SearchViewModelType";

export function Search({ viewModel }:{ viewModel: SearchViewModelType }): ReactElement {
  return <Observer>{() =>
      <Box>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <SearchBoxView
                onSearchTermChange={viewModel.setSearchValue}
                onSearchRequested={viewModel.search} />

            <ProductPreviewView product={viewModel.selectedProduct} />
          </Grid>

          <Grid item md={8}>
            <Box alignItems="center" flexGrow={1}>
              <Typography align="center" variant="h5">Search results</Typography>
            </Box>

            <ProductListView
                items={viewModel.searchResults}
                onProductSelected={viewModel.setSelectedProduct}
            />
          </Grid>
        </Grid>
      </Box>}
  </Observer>;
}

export default withInstances({ viewModel: 'SEARCH_PAGE' }, Search);
