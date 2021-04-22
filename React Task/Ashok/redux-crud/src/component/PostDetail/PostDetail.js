import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    makeStyles,
    Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import virus from "../../assests/images/virus.jpg";
import Comment from "../Comment/Comment";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%",
        height: "100%",
        margin: "20px auto",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    avatar: {
        backgroundColor: "red[500]",
    },
}));

function PostDetail({ match }) {
    const { id } = match?.params;
    let postDetail = null;

    const allPostList = useSelector((state) => state.posts, shallowEqual);

    postDetail = allPostList.find((item) => item.id === +id);
    const classes = useStyles();
    console.log("am rendered at post detail");

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={postDetail.title}
                    subheader={postDetail.postedDate}
                />
                <CardMedia
                    className={classes.media}
                    image={virus}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {postDetail.body}
                    </Typography>
                    <br></br>
                    <Typography variant="h5">All Comments</Typography>
                    <Comment comments={postDetail?.postComments} postId={id} />
                </CardContent>
            </Card>
        </div>
    );
}

export default PostDetail;
