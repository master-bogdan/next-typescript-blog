import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Form,
  Input,
  SubmitButton,
} from './styles';
import { createPost } from 'store/posts/postsActions';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });

  const handlerChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handlerSubmit = (event: any) => {
    event.preventDefault();
    dispatch(createPost(formData))
  }

  return (
    <Form onSubmit={handlerSubmit}>
      <Input
        id="title"
        name="title"
        onChange={handlerChange}
      />
      <Input
        id="body"
        name="body"
        onChange={handlerChange}
      />
      <SubmitButton type="submit">
        add post
      </SubmitButton>
    </Form>
  )
};

export default AddPostForm;
