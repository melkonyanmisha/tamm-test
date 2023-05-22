import React, {useContext, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Context} from "../index";
import {Link as MuiLink} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

const PostsTable = () => {
    const store = useContext(Context);
    const [open, setOpen] = React.useState(false);


    useEffect(() => {
        store.getPosts();
    }, [store]);

    const onPostDelete = async (postId) => {
        await store.deletePost({postId});
        await store.getPosts();
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Text</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {store.posts.map((row, i) => (
                        <TableRow
                            key={row.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell>
                                <MuiLink component={RouterLink} to={`/posts/${row.id}`} variant="body2">
                                    {i + 1}
                                </MuiLink>
                            </TableCell>
                            <TableCell>
                                <MuiLink component={RouterLink} to={`/posts/${row.id}`} variant="body2">
                                    {row.title}
                                </MuiLink>
                            </TableCell>
                            <TableCell>
                                <MuiLink component={RouterLink} to={`/posts/${row.id}`} variant="body2">
                                    {row.text}
                                </MuiLink>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" size="small" onClick={() => onPostDelete(row.id)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default observer(PostsTable);
