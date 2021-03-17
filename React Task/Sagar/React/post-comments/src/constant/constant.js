export const initialState = {
    posts: [
      {
        id: 1,
        title: "First Title",
        postedBy: "John",
        postedDate: new Date(),
        imgUrl:
          "https://images.unsplash.com/photo-1597926661974-69a26ffa0f08?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80",
        postComments: [
          {
            id: 1,
            comment: "First Comment",
            commenter: "ABC",
            commentedDate: new Date(),
          },
          {
            id: 2,
            comment: "Second Comment",
            commenter: "DEF",
            commentedDate: new Date(),
          },
          {
            id: 3,
            comment: "Third Comment",
            commenter: "GHI",
            commentedDate: new Date(),
          },
        ],
      },
  
      {
        id: 2,
        title: "Second Title",
        postedBy: "King",
        postedDate: new Date(),
        imgUrl:
          "https://images.unsplash.com/photo-1570327920356-9d2cdf21020f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        postComments: [
          {
            id: 1,
            comment: "Second First Comment",
            commenter: "Second ABC",
            commentedDate: new Date(),
          },
          {
            id: 2,
            comment: "Second Second Comment",
            commenter: "Second DEF",
            commentedDate: new Date(),
          },
          {
            id: 3,
            comment: "Second Third Comment",
            commenter: "Second GHI",
            commentedDate: new Date(),
          },
        ],
      },
  
      {
        id: 3,
        title: "Third Title",
        postedBy: "Queen",
        postedDate: new Date(),
        imgUrl:
          "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=827&q=80",
        postComments: [
          {
            id: 1,
            comment: "Third First Comment",
            commenter: "Third ABC",
            commentedDate: new Date(),
          },
          {
            id: 2,
            comment: "Third Second Comment",
            commenter: "Third DEF",
            commentedDate: new Date(),
          },
          {
            id: 3,
            comment: "Third Third Comment",
            commenter: "Third GHI",
            commentedDate: new Date(),
          },
        ],
      },
    ],
  };