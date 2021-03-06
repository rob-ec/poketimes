import { deletePost } from '../actions/postActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    };

    render() {
        console.log(this.props);

        const post = this.props.post ? (
            <article className='post'>
                <h4 className='center'>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className='center'>
                    <button className='btn grey' onClick={this.handleClick}>Delete Post</button>
                </div>
            </article>
        ) : (
                <div className='center'>Loading...</div>
            );

        return (
            <article className='container'>
                {post}
            </article>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);