import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getList } from "../../firebase/database/feature-data";

export const getFeatures = createAsyncThunk('get-feature-list', async () => {
    try {
        const res = await getList();
        return res;
    }
    catch (err) {
        console.log(err)
    }
});


const Feature = createSlice({
    name: "feature-data",
    initialState: { featureList: [], featureContent: [] },
    reducers: {
        updateFeatureContent: (state, action) => {
            const { payload } = action
            state.featureContent.push(payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getFeatures.fulfilled, (state, action) => {
            const { payload } = action
            state.featureList = payload
        })
    }
});

export const { updateFeatureContent } = Feature.actions;

export default Feature.reducer;
