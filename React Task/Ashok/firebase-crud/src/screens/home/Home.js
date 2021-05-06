import React from "react";
import { Container, Card } from "react-bootstrap";
import HomeImage from "../../images/abc.jpg";

function Home() {
  return (
    <Container className="mt-5  rounded-top">
      <Card className="bg-dark text-white ">
        <Card.Img src={HomeImage} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>We help to see users!</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
            assumenda? Praesentium beatae ratione consequatur, dolor, aliquid,
            corporis impedit in fugit provident laborum tenetur error nam?
            Sapiente laudantium obcaecati illum quis!
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}

export default Home;

// import React, { useEffect, useState } from "react";
// import { firebaseDatabase, firebaseStore } from "../../firebase/config/config";
// import "./style.css";

// function Home() {
//   const [image, setimage] = useState();
//   const [data, setData] = useState({ username: "", password: "" });
//   const [user, setUser] = useState([]);
//   const [url, setUrl] = useState(null);

//   useEffect(() => {
//     console.log("in useEffect");
//     if (url) {
//       console.log("in useEffect user going to be saved");

//       firebaseDatabase
//         .collection("users")
//         .add({ ...data, photo: url })
//         .then(() => console.log("user saved"));
//     }
//   }, [url]);

//   useEffect(() => {
//     firebaseDatabase
//       .collection("users")
//       .get()
//       .then((snapShot) => {
//         let document = [];

//         snapShot.forEach((doc) => {
//           console.log(doc.id);
//           document.push(doc.data());
//         });
//         setUser(document);
//       });
//   }, [url]);

//   const handleChange = (e) => {
//     if (e.target.type === "file") {
//       setimage(e.target.files[0]);
//     } else {
//       const { name, value } = e?.target;
//       setData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const ref = firebaseStore.ref(image.name);
//     ref.put(image).on(
//       "state_changed",
//       (snapShot) => {
//         console.log(snapShot);
//       },
//       (error) => {
//         console.log(error);
//       },
//       async () => {
//         const url = await ref.getDownloadURL();
//         setimage((prev) => ({ ...prev, photo: url }));
//         setUrl(url);
//       }
//     );
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="username" onChange={handleChange} />
//         <input type="password" name="password" onChange={handleChange} />

//         <input type="file" name="file" onChange={handleChange} multiple />
//         <button type="submit">Add Image</button>
//       </form>

//       <div className="user-container">
//         {user.length
//           ? user.map((item, i) => (
//               <div key={i} className='user-item'>
//                 <p>name:{item?.username}</p>
//                 <p>password:{item?.password}</p>
//                 <img src={item?.photo} alt="" />
//               </div>
//             ))
//           : "no user to show"}
//       </div>
//     </div>
//   );
// }

// export default Home;
