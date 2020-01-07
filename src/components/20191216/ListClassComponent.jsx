import React from "react";

export default class ListClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        { id: 1, name: "Gustavo" },
        { id: 2, name: "Jhonatan" },
        { id: 3, name: "Foo" },
        { id: 4, name: "Bar" }
      ]
    };
    this.pushNewItem = this.pushNewItem.bind(this);
  }

  pushNewItem() {
    const todoList = this.state.todoList;
    todoList.push({
      id: Math.random(),
      name: Math.random()
        .toString(36)
        .substr(2, 9)
    });
    this.setState({ todoList });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todoList.map(item => (
            <li key={item.id.toString()}>{item.name}</li>
          ))}
        </ul>
        <button onClick={this.pushNewItem}>Add new item</button>
      </div>
    );
  }
}
