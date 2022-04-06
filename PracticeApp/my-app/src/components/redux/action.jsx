function search(keyword) {
    return {
        type: "search",
        payload: keyword
    };
}


export { search };