import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AboutState } from './type'

const initialState: AboutState = {
  error: false,
  data: null,
  loading: true
}

export const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    setAboutData: (state, action: PayloadAction<AboutState>) => {
      state.error = action.payload.error
      state.data = action.payload.data
      state.loading = action.payload.loading
    }
  }
})

export const { setAboutData } = aboutSlice.actions

export const selectAbout = (state:any) => state.about


export default aboutSlice.reducer

