import React, { useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts'

import Post from './Post/Post';
import { Card } from './Card/Card';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    handleData()

  }, [])


  const handleData = async () => {
    const data = await dispatch(getPosts());
    console.log(data)
  }


  if (!posts.length && !isLoading) return 'Nenhum post ainda, crie alguns :)';

  return (
    isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>

        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            {/* <Post post={post} setCurrentId={setCurrentId} /> */}
            <Card post={post} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
