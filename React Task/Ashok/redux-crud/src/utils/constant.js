import PostDetail from "../component/PostDetail/PostDetail";
import AllPost from "../component/AllPost/AllPost";

export const PostData = [
  {
    id: 1,
    title: "Coronavirus floods across Nepal",
    postedDate: "2020/01/21",
    body:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Quisquam doloremque et voluptate ipsum, quasi ad quia qui    itaque, atque magnam amet accusamus? Iusto voluptas dolorum,   libero ipsam maxime distinctio at.",
    postComments: [
      {
        id: 1,
        comment: "Stay Safe Stay Home",
        commenter: "Jennifer",
        commentedDate: "2020/01/21",
      },
      {
        id: 2,
        comment: "Dangerous Situtaion",
        commenter: "Kulman Kulkarni",
        commentedDate: "2022/09/21",
      },
      {
        id: 3,
        comment: "Be alerted",
        commenter: "Rani Mukharijii",
        commentedDate: "2020/06/08",
      },
    ],
  },
  {
    id: 2,
    title: "Coronavirus floods across Nepal",
    postedDate: "2020/01/21",
    body:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Quisquam doloremque et voluptate ipsum, quasi ad quia qui    itaque, atque magnam amet accusamus? Iusto voluptas dolorum,   libero ipsam maxime distinctio at.",
    postComments: [
      {
        id: 1,
        comment: "Stay Safe Stay Home",
        commenter: "Jennifer",
        commentedDate: "2020/01/21",
      },
      {
        id: 2,
        comment: "Dangerous Situtaion",
        commenter: "Kulman Kulkarni",
        commentedDate: "2022/09/21",
      },
      {
        id: 3,
        comment: "Be alerted",
        commenter: "Rani Mukharijii",
        commentedDate: "2020/06/08",
      },
    ],
  },
  {
    id: 3,
    title: "Coronavirus floods across Nepal",
    postedDate: "2020/01/21",
    body:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Quisquam doloremque et voluptate ipsum, quasi ad quia qui    itaque, atque magnam amet accusamus? Iusto voluptas dolorum,   libero ipsam maxime distinctio at.",
    postComments: [
      {
        id: 1,
        comment: "Stay Safe Stay Home",
        commenter: "Jennifer",
        commentedDate: "2020/01/21",
      },
      {
        id: 2,
        comment: "Dangerous Situtaion",
        commenter: "Kulman Kulkarni",
        commentedDate: "2022/09/21",
      },
      {
        id: 3,
        comment: "Be alerted",
        commenter: "Rani Mukharijii",
        commentedDate: "2020/06/08",
      },
    ],
  },
];

export const Routes = [
  {
    id: 1,
    isExact: true,
    path: "/posts",
    component: AllPost,
  },
  {
    id: 1,
    isExact: true,
    path: "/post/:id",
    component: PostDetail,
  },
];
