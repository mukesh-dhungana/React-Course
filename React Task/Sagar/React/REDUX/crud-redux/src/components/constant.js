export const initialState = {
  posts: [
    {
      id: 1,
      title: "First Title",
      postedBy: "John",
      postedDate: "2021/1/1",
      imgUrl:
        "https://images.unsplash.com/photo-1607126974829-04a4579edc50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80",
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
      postedDate: "2021/1/1",

      imgUrl:
        "https://images.unsplash.com/photo-1493020258366-be3ead1b3027?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
      postedDate: "2021/1/1",

      imgUrl:
        "https://images.unsplash.com/photo-1613515766617-966afdd196cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
