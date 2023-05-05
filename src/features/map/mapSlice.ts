import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ViewState } from "react-map-gl";

export interface IMapConfig {
  style: string;
}

export interface IMapState {
  viewState: Partial<ViewState>;
  edgesFeatureCollection: GeoJSON.FeatureCollection | null;
  config: IMapConfig
}

export const initialMapState: IMapState = {
  viewState: {
    latitude: 0.0,
    longitude: 0.0,
    zoom: 0.0,
  },
  edgesFeatureCollection: null,
  config: {
    style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
  }
};

export const mapSlice = createSlice({
  name: "map",
  initialState: initialMapState,
  reducers: {
    setPosition: (
      state,
      action: PayloadAction<{ latitude: number; longitude: number }>
    ) => {
      state.viewState.latitude = action.payload.latitude;
      state.viewState.longitude = action.payload.longitude;
    },
    setZoom: (state, action: PayloadAction<number>) => {
      state.viewState.zoom = action.payload;
    },
    setEdgesFeatureCollection: (
      state,
      action: PayloadAction<GeoJSON.FeatureCollection | null>
    ) => {
      state.edgesFeatureCollection = action.payload;
    },
    updateConfig: (
      state,
      action: PayloadAction<Partial<IMapConfig>>
    ) => {
      state.config = { ...state.config, ...action.payload }
    }
  },
});

export const { actions: mapSliceActions, reducer: mapReducer } = mapSlice;
