import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortedState = [...state];
            if (action.payload === 'up') {
                sortedState.sort((a, b) => a.name.localeCompare(b.name));
            } else if (action.payload === 'down') {
                sortedState.sort((a, b) => b.name.localeCompare(a.name));
            }
            return sortedState;
        }
        case 'check': {
            const filteredState = state.filter((user) => user.age >= action.payload);
            return filteredState;
        }
        default:
            return state
    }
}
