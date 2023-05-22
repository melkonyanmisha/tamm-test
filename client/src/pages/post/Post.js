import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Context} from "../../index";
import {Alert, Snackbar} from "@mui/material";

const Post = () => {
    const {postId} = useParams();
    const store = useContext(Context);
    const [data, setData] = useState({});
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        store.getPost({postId});
    }, [postId, store]);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event) => {
        setOpen(false);
    };

    const onPostUpdate = async (postId) => {
        await store.updatePost({postId, data});
        await store.getPost({postId});

        handleClick();
    }

    return (
        <Card sx={{maxWidth: 345}}>
            <CardContent>
                <Typography
                    onInput={(e) => setData({...data, title: e.target.innerText})}
                    suppressContentEditableWarning={true}
                    contentEditable={true}
                    gutterBottom variant="h5"
                    component="div"
                >
                    {store.post.title}
                </Typography>
                <Typography
                    onInput={(e) => setData({...data, text: e.target.innerText})}
                    suppressContentEditableWarning={true}
                    contentEditable={true}
                    variant="body2"
                    color="text.secondary"
                >
                    {store.post.text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => onPostUpdate(postId)}>Update
                </Button>
            </CardActions>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                    Successfully updated
                </Alert>
            </Snackbar>
        </Card>
    );
}

export default observer(Post);
