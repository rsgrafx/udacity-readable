import React, {Component} from 'react'

class Form extends Component {
  // const  title, author, body, category
  state = {
    id: '',
    timestamp: Date.now(),
    title: '',
    author: '',
    body: '',
    category: ''
  }

  handleTitleChange(event) {
    this.setState({...this.state,
      title: event.target.value,
    })
  }
  handleAuthorChange(event) {
    this.setState({...this.state,
      author: event.target.value
    })
  }

  handleBodyChange(event) {
    this.setState({...this.state,
      body: event.target.value
    })
  }

  handleCategoryChange(event) {
    this.setState({...this.state,
      category: event.target.value
    })
  }

  componentWillMount() {
    this.setState({...this.state, ...this.props.postObj})
  }

  onSubmitForm(event) {
    event.preventDefault()

    if (this.state.id === '') {
      this.setState({...this.state, id: Math.random().toString(36).substr(-10)})
    }

    this.props.formFunc(this.state)

    this.state.title = ''
    this.state.author = ''
    this.state.body = ''
  }

  render() {
    let {categories, postObj} = this.props
    return(
      <div id="create-post-form" className="col-md-8">
        <h3>{
          (this.state.title === '') ? 'New Post From React' : `Edit Post: "${this.state.title}"`}</h3>
        <form onSubmit={this.onSubmitForm.bind(this)}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter Title.."
            value={this.state.title}
            onChange={this.handleTitleChange.bind(this)}
            className="form-control"
            />
          <label>Authors Name</label>

          <select
            className="form-control"
            onChange={this.handleCategoryChange.bind(this)}>
            {this.props.categories.map((cat) => (<option key={cat.name} value={cat.name}>{cat.name}</option>))}
          </select>

          <input
            type="text"
            name="author"
            placeholder="Enter Authors name..."
            onChange={this.handleAuthorChange.bind(this)}
            value={this.state.author}
            className="form-control" />
          <label >Post Body</label>
          <textarea
            name="body"
            cols="30"
            rows="10"
            placeholder="details..."
            value={this.state.body}
            onChange={this.handleBodyChange.bind(this)}
            className="form-control">
          </textarea>
          <input type="submit" className="btn btn-success btn-large btn-rounded" value="Save" />
          <a className="btn btn-warning btn-large btn-rounded" href="/">Cancel</a>
        </form>
      </div>)
    }
}

export default Form