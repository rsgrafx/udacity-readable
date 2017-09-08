import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createPost} from '../../actions/posts'
import {getCategories} from  '../../actions'

export const PostFormEmbed = (props) => {
  let title, author, body, category

  const onSubmitForm = (event) => {
    let post = {
      id: Math.random().toString(36).substr(-10),
      timestamp: Date.now(),
      title: title.value,
      author: author.value,
      body: body.value,
      category: category.value
    }
    event.preventDefault()
    props.newPost(post)
    title.value = ''
    author.value = ''
    body.value = ''
    title.focus()
  }

  return(
    <div id="create-post-form" className="col-md-8">
      <h3>New Post From React</h3>
      <form onSubmit={onSubmitForm}>
        <label >Title</label>
        <input
          ref={input => title = input}
          type="text"
          name="title"
          placeholder="Enter Title.."
          className="form-control"
          />
        <label >Authors Name</label>

        <select className="form-control" ref={input => category = input}>
          {props.categories.map((cat) => (<option key={cat.name} value={cat.name}>{cat.name}</option>))}
        </select>

        <input
          ref={input => author = input}
          type="text"
          name="author"
          placeholder="Enter Authors name..."
          className="form-control" />
        <label >Post Body</label>
        <textarea
          ref={input => body = input}
          name="body"
          cols="30"
          rows="10"
          placeholder="details..."
          className="form-control">
        </textarea>
        <input type="submit" className="btn btn-success btn-large btn-rounded" value="Save" />
        <a className="btn btn-warning btn-large btn-rounded" href="/">Cancel</a>
      </form>
    </div>)
}

class PostForm extends Component {

  componentWillMount() {
    this.props.loadCategories()
  }
  render() {
    return(<PostFormEmbed categories={this.props.categories} newPost={this.props.newPost} />)
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCategories: (data) => dispatch(getCategories(data)),
    newPost: (data) => dispatch(createPost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);