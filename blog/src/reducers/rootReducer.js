const initState = {
    posts: [
        {id: '1', title: 'post1', body: 'post1 body'},
        {id: '2', title: 'post2', body: 'post2 body'},
        {id: '3', title: 'post3', body: 'post3 body'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;