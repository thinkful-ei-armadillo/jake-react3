import React, { Component } from 'react';

export default class Accorion extends Component {
  
  static defaultProps = {
  sections: [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ],
  }
  
  state = {
    lastClickedIndex: null
  }

  handleLastClicked = (lastIndex) => {
    this.setState({lastClickedIndex: lastIndex})

  }

  displayItem(section, index, lastClickedIndex) {
    return(
      <li className = "Item" key={index}>
      <button onClick={() => this.handleLastClicked(index)}>{section.title}</button>
      {(lastClickedIndex === index) && section.content}
      </li>
    )
  }

render() {
  const {lastClickedIndex} = this.state
  const {sections} = this.props
  return(
      <ul className = 'Accordion'>
      {sections.map((section, index) => 
        this.displayItem(section, index, lastClickedIndex)
      )}
      </ul>
  )
}
}