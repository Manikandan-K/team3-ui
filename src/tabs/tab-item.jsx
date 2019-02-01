import React from "react";

class TabItem extends React.Component {
  onTabClick = (e) => {
    e.preventDefault()
    this.props.onToggle(this.props.tabIndex, this.props.data.key)
  }

  render() {
    const { data, isActive} = this.props;
    return (
    <li className="nav-item" onClick={this.onTabClick.bind(this)}>
      <a className={`nav-link ${isActive ? "active" : ""}`}>
        {data.label}
      </a>
    </li>
  );
  }
};

export default TabItem