import { createSlice } from '@reduxjs/toolkit'

const dataSlice = createSlice({
    name: "data",
    initialState: {
        data: [
            { id: 1, name: "First One" },
            { id: 2, name: "Second One" }
        ],
        detail: {},
        editMode: false
    },
    reducers: {

        addData: (state, action) => {
            const getId = () => state.data.reduce((a, c) => a > c.id ? a : c.id, 0) + 1
            state.data = [{ id: getId(), ...action.payload }, ...state.data]
        },

        removeData: (state, action) => {
            state.data = state.data.filter(x => x.id !== action.payload)
        },

        getDetail: (state, action) => {
            state.detail = action.payload
            state.editMode = true
        },

        updateData: (state, action) => {
            state.data = state.data.map(x => action.payload.id === x.id ? action.payload : x)
            state.detail = {}
            state.editMode = false
        }
    }

})
export const { addData, removeData, updateData, getDetail } = dataSlice.actions
export default dataSlice.reducer