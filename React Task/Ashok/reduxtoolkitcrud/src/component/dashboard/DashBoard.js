import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../redux/photoReducerSlice";
import AddUser from "../AddUser/AddUser";
import Loading from "../Loading/Loading";
import UserTable from "../userTable/UserTable";

function DashBoard() {
  const dispatch = useDispatch();
  const controller = new AbortController();
  const { photos, loading } = useSelector(
    (state) => state.photoReducer,
    shallowEqual
  );

  useEffect(() => {
    dispatch(
      fetchPhoto({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "GET",
        signal: controller.signal,
      })
    );
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <ul>
        {loading ? (
          <Loading />
        ) : photos?.length ? (
          <>
            <UserTable users={photos} />
            <AddUser />
          </>
        ) : (
          "No any Data to show"
        )}
      </ul>
    </div>
  );
}

// import "./style.css";

// function DashBoard() {
//   return (
//     <>
//       <div className="navbar" id="navbar">
//         <h2>Dashboard</h2>
//         <a href="#container1">AboutUS</a>
//         <a href="#container2">Contact</a>
//       </div>

//       <div>
//         {" "}
//         <div className="parallelax">
//           {" "}
//           <div className="container" id="container2">
//             <h3>
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
//               fuga magnam impedit provident accusantium. Corrupti, quo
//               voluptatibus quod numquam incidunt recusandae quibusdam ea ipsa
//               facere iure veniam commodi, delectus minus.
//             </h3>
//           </div>{" "}
//           <div className="container" id="container2">
//             <h3>
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
//               fuga magnam impedit provident accusantium. Corrupti, quo
//               voluptatibus quod numquam incidunt recusandae quibusdam ea ipsa
//               facere iure veniam commodi, delectus minus.
//             </h3>
//           </div>
//         </div>
//         <div className="container" id="container2">
//           <h3>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fuga
//             magnam impedit provident accusantium. Corrupti, quo voluptatibus
//             quod numquam incidunt recusandae quibusdam ea ipsa facere iure
//             veniam commodi, delectus minus.
//           </h3>
//         </div>
//         <div className="container">
//           <h3>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fuga
//             magnam impedit provident accusantium. Corrupti, quo voluptatibus
//             quod numquam incidunt recusandae quibusdam ea ipsa facere iure
//             veniam commodi, delectus minus.
//           </h3>
//           <h3>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fuga
//             magnam impedit provident accusantium. Corrupti, quo voluptatibus
//             quod numquam incidunt recusandae quibusdam ea ipsa facere iure
//             veniam commodi, delectus minus.
//           </h3>{" "}
//           <h3>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fuga
//             magnam impedit provident accusantium. Corrupti, quo voluptatibus
//             quod numquam incidunt recusandae quibusdam ea ipsa facere iure
//             veniam commodi, delectus minus.
//           </h3>{" "}
//           <h3>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fuga
//             magnam impedit provident accusantium. Corrupti, quo voluptatibus
//             quod numquam incidunt recusandae quibusdam ea ipsa facere iure
//             veniam commodi, delectus minus.
//           </h3>{" "}
//           <h3>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fuga
//             magnam impedit provident accusantium. Corrupti, quo voluptatibus
//             quod numquam incidunt recusandae quibusdam ea ipsa facere iure
//             veniam commodi, delectus minus.
//           </h3>{" "}
//           <h3>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fuga
//             magnam impedit provident accusantium. Corrupti, quo voluptatibus
//             quod numquam incidunt recusandae quibusdam ea ipsa facere iure
//             veniam commodi, delectus minus.
//           </h3>
//         </div>
//       </div>
//       <div>
//         {" "}
//         <div className="parallelax1">
//           <div>
//             <h3>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Praesentium fugit quo, officia ex amet beatae doloremque incidunt
//               aliquid nobis molestias, temporibus fugiat eveniet saepe minima?
//               Veniam at sapiente doloremque reiciendis!
//             </h3>
//           </div>
//         </div>
//         <div className="container" id="container1">
//           <h3>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fuga
//             magnam impedit provident accusantium. Corrupti, quo voluptatibus
//             quod numquam incidunt recusandae quibusdam ea ipsa facere iure
//             veniam commodi, delectus minus.
//           </h3>
//         </div>
//         <div className="container">
//           <h3>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fuga
//             magnam impedit provident accusantium. Corrupti, quo voluptatibus
//             quod numquam incidunt recusandae quibusdam ea ipsa facere iure
//             veniam commodi, delectus minus.
//           </h3>
//           <h3>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fuga
//             magnam impedit provident accusantium. Corrupti, quo voluptatibus
//             quod numquam incidunt recusandae quibusdam ea ipsa facere iure
//             veniam commodi, delectus minus.
//           </h3>{" "}
//           <h3>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fuga
//             magnam impedit provident accusantium. Corrupti, quo voluptatibus
//             quod numquam incidunt recusandae quibusdam ea ipsa facere iure
//             veniam commodi, delectus minus.
//           </h3>{" "}
//           <h3>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fuga
//             magnam impedit provident accusantium. Corrupti, quo voluptatibus
//             quod numquam incidunt recusandae quibusdam ea ipsa facere iure
//             veniam commodi, delectus minus.
//           </h3>{" "}
//           <h3>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fuga
//             magnam impedit provident accusantium. Corrupti, quo voluptatibus
//             quod numquam incidunt recusandae quibusdam ea ipsa facere iure
//             veniam commodi, delectus minus.
//           </h3>{" "}
//           <h3>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fuga
//             magnam impedit provident accusantium. Corrupti, quo voluptatibus
//             quod numquam incidunt recusandae quibusdam ea ipsa facere iure
//             veniam commodi, delectus minus.
//           </h3>
//         </div>
//       </div>
//       <a href="#container2">Back to top</a>
//     </>
//   );
// }

export default DashBoard;
