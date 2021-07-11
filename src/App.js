import './App.css';
import React from 'react';
import Card from './Card'

export class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      searchValue: '',
      searchRating: ''
    }
  }
  componentDidMount() {
    fetch('https://raw.githubusercontent.com/algolia/datasets/master/movies/actors.json')
      .then(resp => resp.json())
      .then(data => this.setState({ posts: data }))
    console.log(this.state.posts)
  }




  render() {
    const filteredPosts = this.state.posts.filter((post) => {
      if (post.name.includes(this.state.searchValue)) {
        return true
      } else {
        return false
      }
    })
    const filterRating = this.state.posts.filter((post) => {
      if (post.rating >= (this.state.searchRating)) {
        return true
      } else {
        return false
      }
    })
    let intersection = filterRating.filter(x => filteredPosts.includes(x));

    return (
      <div style={{ textAlign: 'center' }}> Search by Name:
        <input type="text" value={this.state.searchValue} onChange={(event) => {
          this.setState({ searchValue: event.target.value });
        }} />
        Search by Rating:
        <input type="number" value={this.state.searchRating} onChange={(event) => {
          this.setState({ searchRating: event.target.value });
        }} />
        <div className="card-list">

          {intersection.map((p) => {
            return <Card name={p.name} body={p.rating} image={p.image_path} size="medium" />
          })}
        </div>
      </div>
    )

  }
}
export default Main
