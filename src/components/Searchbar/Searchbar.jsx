import React, { Component } from 'react'
import '../styles.css'
import { FaBeer } from 'react-icons/fa';

export default class Searchbar extends Component {
    state = {
        search: "",
  }
  handleChange = (event) => {
        const {  value } = event.target;
        this.setState({
            search: value,
        })
  }
   handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state)
        this.setState({
          search: "",
        })
  }
  
  render() {
    return (
      <>
      <header className="searchbar">
    <form onSubmit={this.handleSubmit} className="form">
            <button type="submit" className="searchFormButton">
              {<FaBeer />}
      <span className="searchFormButtonLabel">Search</span>
    </button>

    <input
      className="input"
      type="text"
      value={this.state.search}
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleChange}
    />
    </form>
      </header>
      </>
      
    )
  }
}
