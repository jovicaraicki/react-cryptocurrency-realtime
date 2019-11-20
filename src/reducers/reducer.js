export default function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_CRYPTOS':
            return { 
                ...state,
                cryptos: action.payload
            }
        case 'COLLAPSE':
            return {
                ...state,
                collapse: !action.payload
            }
        case 'CHANGE_CURRENCY':
            return {
                ...state,
                crypto: action.payload
            }
        case 'CHANGE_PREFIX':
            return {
                ...state,
                currency: action.payload
            }
        case 'CHANGE_TICKER':
            return {
                ...state,
                ticker: action.payload
            }
        case 'CHANGE_KEY':
            return {
                ...state,
                selectedKey: action.payload
            }
        case 'PERCENT_COLOR_HOUR':
            return {
                ...state,
                colorHour: action.payload
            }
        case 'PERCENT_COLOR_24H':
            return {
                ...state,
                color24h: action.payload
            }
        default:
            return state;
    }
}