
const initialState = {
    posts: [
        {
            id: 1, title: "Post 1", comments: [
                { id: 1, comment: "P1 C1" },
                { id: 2, comment: "P1 C2" },
            ]
        },
        {
            id: 2, title: "Post 2", comments: [
                { id: 1, comment: "P2, C1" },
                { id: 2, comment: "P2 C2" }
            ]
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        default: return state
    }
}

export default reducer