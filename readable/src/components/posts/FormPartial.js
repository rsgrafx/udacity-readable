import React, {Component} from 'react'
import Do from '../../actions/constants'
import store from '../../store'

class Form extends Component {
  state = {
    redirected: false
  }

  handleTitleChange(event) {
    store.dispatch({
      type: Do.PREPARE_POST,
      title: event.target.value
    })
  }
  handleAuthorChange(event) {
    store.dispatch({
      type: Do.PREPARE_POST,
      author: event.target.value
    })
  }

  handleBodyChange(event) {
    store.dispatch({
      type: Do.PREPARE_POST,
      body: event.target.value
    })
  }

  handleCategoryChange(event) {
    store.dispatch({
      type: Do.PREPARE_POST,
      category: event.target.value
    })
  }

  onSubmitForm(event) {
    const {_title, _body, _author} = this.refs
    event.preventDefault()
    const category = store.getState().post.category
    store.dispatch({
      type: Do.PREPARE_POST,
      timestamp: Date.now(),
      category: ( category === undefined) ? 'react' : category
    })

    this.props.formFunc(store.getState().post)
    store.dispatch({type: Do.NEW_POST})

    _title.value = ''
    _body.value = ''
    _author.value = ''
    this.setState({redirected: true})
  }

  render() {
    const {categories} = this.props
    return(
    <div>
    { (this.state.redirected === false) ?
      <div id="create-post-form" className="col-md-8">
        <form onSubmit={this.onSubmitForm.bind(this)}>
          <label>Title</label>
          <input
            ref="_title"
            type="text"
            name="title"
            placeholder="Enter Title.."
            value={store.getState().post.title}
            onChange={this.handleTitleChange.bind(this)}
            className="form-control"
            />
          <label>Authors Name</label>
          <select
            className="form-control"
            onChange={this.handleCategoryChange.bind(this)}>
            {categories.map((cat) => (<option key={cat.name} value={cat.name}>{cat.name}</option>))}
          </select>
          <input
            type="text"
            ref="_author"
            name="author"
            placeholder="Enter Authors name..."
            value={store.getState().post.author}
            onChange={this.handleAuthorChange.bind(this)}
            className="form-control" />
          <label >Post Body</label>
          <textarea
            name="body"
            ref="_body"
            cols="30"
            rows="10"
            placeholder="details..."
            value={store.getState().post.body}
            onChange={this.handleBodyChange.bind(this)}
            className="form-control">
          </textarea>
          <input type="submit" className="btn btn-success btn-large btn-rounded" value="Save" />
          <a className="btn btn-warning btn-large btn-rounded" href="/">Cancel</a>
        </form>
      </div>
      : <h1> Post Submitted. </h1>
      }
    </div>)
    }
}

export default Form