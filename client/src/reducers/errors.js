import { SET_ERROR, CLEAR_ERROR } from "../constants/index"

const initState = {};

export default function (state = initState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_ERROR:
            return payload;

        case CLEAR_ERROR:
            return {};

        default:
            return state;
    }
}