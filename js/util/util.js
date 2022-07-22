// utility functions

// javascript implementation of apache stringutils -> trimToEmpty
const trimToEmpty = (str) => {
    if (str) {
        return str;
    }
    return "";
}

export default {
    trimToEmpty
}