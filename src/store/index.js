import { configureStore } from '@reduxjs/toolkit';
import languageSlice from './slices/language';

export default configureStore({
    reducer: {
        language: languageSlice.reducer,
    }
});