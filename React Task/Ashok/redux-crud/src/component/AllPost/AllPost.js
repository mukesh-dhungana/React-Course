import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    makeStyles,
    Paper,
    Typography,
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "80%",
        margin: " 20px auto",
        padding: "20px",
        height: "100vh",
        backgroundColor: theme.palette.background.paper,
    },
    listItem: {
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "rgba(0,0,0,0.06)",
        },
    },
}));

function AllPost({ history }) {
    const classes = useStyles();
    const allPostList = useSelector((state) => state.posts, shallowEqual);
    const handleClick = (id) => {
        history.push({ pathname: `/post/${id}` });
    };

    return (
        <Paper elevation={3} className={classes.root}>
            <Typography align="center" variant="h4">
                All Posts Available
            </Typography>
            <List>
                {allPostList?.map(({ id, title, postedDate }) => (
                    <ListItem
                        key={id}
                        onClick={() => handleClick(id)}
                        className={classes.listItem}
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={title} secondary={postedDate} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}

export default AllPost;
