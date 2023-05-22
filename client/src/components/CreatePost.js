import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Context} from "../index";

const CreatePost = () => {
    const store = useContext(Context);
    const [form, setForm] = useState({title: '', text: ''});

    const onFormChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const onPostAdd = async () => {
        await store.createPost(form);
    }

    return (
        <div style={{display: 'flex', margin: '20px 0'}}>
            <TextField style={textFieldStyles} label="Title" name='title' variant="outlined" size="small"
                       onChange={onFormChange}/>
            <TextField style={textFieldStyles} label="Text" name='text' variant="outlined" size="small"
                       onChange={onFormChange}/>
            <Button variant="contained" size="medium" onClick={onPostAdd}>
                Add
            </Button>

        </div>
    );
};

export default observer(CreatePost);

const textFieldStyles = {
    marginRight: '10px'
}
