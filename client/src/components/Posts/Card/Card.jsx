import React from 'react'
import useStyles from './styles'
import { Button } from '@material-ui/core/';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';


// import LocalFireDepartmentIcon from '@material-ui/icons/LocalFireDepartment';
import { likePost, deletePost } from '../../../actions/posts';


export const Card = ({ post, setCurrentId }) => {
    const classes = useStyles()
    const user = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory();
    const dispatch = useDispatch();



    const Likes = () => {
        if (post?.likes?.length > 0) {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <><Brightness4Icon fontSize="small" />&nbsp;{`${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><Brightness5Icon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }
        return <><Brightness5Icon fontSize="small" />&nbsp;Like</>;
    };

    const openPost = (e) => {
        history.push(`/posts/${post._id}`);
    };

    return (
        <div className={classes.container} >
            <img className={classes.image} src={post.selectedFile} alt="" />
            <div className={classes.header} onClick={openPost}>
                <h1 className={classes.title}>
                    {post.title}
                </h1>
            </div>
            <div className={classes.section}>
                <p className={classes.textTitle}>
                    {post.name}
                </p>
                <p className={classes.textArea}>
                    {post.message.split(' ').splice(0, 20).join(' ')}...
                </p>
                <div className={classes.likeButton}>
                    <Button
                        size="small"
                        disabled={!user?.result}
                        style={{ color: '#FBAF1C' }}
                        onClick={() => dispatch(likePost(post._id))}
                    >
                        <Likes />
                    </Button>
                    {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                        <div className={classes.overlay2} name="edit">
                            <Button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentId(post._id);
                                }}
                                style={{ color: 'white' }}
                                size="small"
                            >
                                <CreateIcon fontSize="default" />
                            </Button>
                        </div>
                    )}
                    {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                        <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                            <DeleteIcon fontSize="small" />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}