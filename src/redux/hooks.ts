/* eslint-disable */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
/* eslint-enable */
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
