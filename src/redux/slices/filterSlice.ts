import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum SortPropertyEnum {
	RATING_DESC = 'rating',
	RATING_ASC = '-rating',
	TITLE_DESC = 'title',
	TITLE_ASC = '-title',
	PRICE_DESC = 'price',
	PRICE_ASC = '-price',
}

type Sort = {
	name: string;
	sortProperty: SortPropertyEnum;
};

interface FilterSliceState {
	searchValue: string;
	categoryId: number;
	currentPageCount: number;
	sort: Sort;
}

const initialState: FilterSliceState = {
	searchValue: '',
	categoryId: 0,
	currentPageCount: 1,
	sort: {
		name: 'популярності',
		sortProperty: SortPropertyEnum.RATING_DESC,
	},
};

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId(state, action: PayloadAction<number>) {
			state.categoryId = action.payload;
		},
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload;
		},
		setSort(state, action: PayloadAction<Sort>) {
			state.sort = action.payload;
		},
		setCurrentPageCount(state, action: PayloadAction<number>) {
			state.currentPageCount = action.payload;
		},
		setFilters(state, action: PayloadAction<FilterSliceState>) {
			if (Object.keys(action.payload).length) {
				state.currentPageCount = Number(action.payload.currentPageCount);
				state.categoryId = Number(action.payload.categoryId);
				state.sort = action.payload.sort;
			} else {
				state.currentPageCount = 1;
				state.categoryId = 0;
				state.sort = {
					name: 'популярности',
					sortProperty: SortPropertyEnum.RATING_DESC,
				};
			}
		},
	},
});

export const selectFilter = (state: RootState) => state.filter;

export const selectSort = (state: RootState) => state.filter.sort;

export const {
	setCategoryId,
	setSort,
	setCurrentPageCount,
	setFilters,
	setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
