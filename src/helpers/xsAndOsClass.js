const getSymbolClassName = (value) => {
    if (value === 0) {
        return "xs_and_os os_symbol"
    } else if (value === 1) {
        return "xs_and_os xs_symbol"
    }
    return '';
}
export default getSymbolClassName;