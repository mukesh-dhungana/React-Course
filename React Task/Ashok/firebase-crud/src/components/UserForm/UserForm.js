import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { withRouter } from "react-router";
import { firebaseStore } from "../../firebase/config/config";
import {
  addUserService,
  userEditprofile,
} from "../../services/databaseServices";
import {
  addUserProfileImage,
  deleteUserProfileImage,
} from "../../services/storeServices";
import notification from "../../utils/notification";

function UserForm({ actionType, history, user }) {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [submmting, setSubmitting] = useState(false);
  const [userData, setUserData] = useState(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: user?.username,
      email: user?.email,
      address: user?.email,
    },
  });

  useEffect(() => {
    if (url) {
      if (actionType === "add") {
        addUserService({
          ...userData,
          photoName: image.name,
          photoUrl: url,
        })
          .then((response) => {
            setSubmitting(false);
            notification.showSuccess("sucessufully added ");

            setImage(null);
            reset();
            history.push("/");
          })
          .catch((err) => {
            setSubmitting(false());
            notification.showError("Adding user failed added ");
          });
      } else {
        userEditprofile(user.id, {
          ...user,
          photoUrl: url,
          photoName: image.name,
        })
          .then((response) => {
            setSubmitting(false);
            notification.showSuccess("sucessufully edited ");

            setImage(null);
            reset();
            history.push("/all-users");
          })
          .catch((err) => {
            setSubmitting(false());
            notification.showError("Adding user failed added ");

            console.log(err);
          });
      }
    }
  }, [url]);

  const onSubmit = (data) => {
    setSubmitting(true);
    setUserData(data);
    if (actionType === "add") {
      addUserProfileImage(image).add.on(
        "state_changed",
        (snapShot) => {},
        (err) => {
          setSubmitting(false);
          notification.showError("Adding user failed added ");
        },
        async () => {
          const url = await firebaseStore.ref(image.name).getDownloadURL();

          setUrl(url);
        }
      );
    }
    if (actionType === "Edit") {
      if (image) {
        addUserProfileImage(image).add.on(
          "stated_changed",
          null,
          (err) => {
            setSubmitting(false);
            notification.showError("error occured at uploading new image");
          },
          async () => {
            const url = await firebaseStore.ref(image.name).getDownloadURL();
            await deleteUserProfileImage(user.photoName);
            setUrl(url);
          }
        );
      } else {
        userEditprofile(user.id, data)
          .then((res) => {
            notification.showInfo("user edited sucessfully");
            history.push("/all-users");
          })
          .catch((err) => notification.showError("could not edit the user"));
      }
    }
  };

  const handleImageOnChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="username"
        defaultValue=""
        rules={{
          required: { value: true, message: "username is required" },
        }}
        render={(props) => {
          return (
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                {...props.field}
              />
              <Form.Text className="text-danger">
                {errors?.username?.message}
              </Form.Text>
            </Form.Group>
          );
        }}
      />
      <Controller
        control={control}
        name="email"
        defaultValue=""
        rules={{
          required: { value: true, message: "email is required" },
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "invalid email",
          },
        }}
        render={(props) => {
          return (
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                {...props.field}
              />
              <Form.Text className="text-danger">
                {errors?.email?.message}
              </Form.Text>
            </Form.Group>
          );
        }}
      />
      <Controller
        control={control}
        name="address"
        defaultValue=""
        render={(props) => {
          return (
            <Form.Group controlId="address">
              <Form.Label> Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                {...props.field}
              />
            </Form.Group>
          );
        }}
      />
      <Form.Group controlId="photo">
        <Form.Label>Add Photo</Form.Label>
        <Form.Control type="file" onChange={handleImageOnChange} />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        disabled={submmting ? true : false}
      >
        {submmting ? "processing" : `${actionType} user`}
      </Button>
    </Form>
  );
}

export default withRouter(UserForm);
