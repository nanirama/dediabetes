import React from 'react'
import Links from '../constants/links'
import Categories from '../components/Categories'
import { ICONS } from '../constants/icons'
import Icon from '../components/Icon'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'showSidebar' : ''}`}>
      <button className="close-btn" onClick={toggle}>
        <Icon icon={ICONS.CLOSE}></Icon>
      </button>
      <div className="sidebar-container">
        <Links styleClass="sidebar-links">
          <Categories />
        </Links>
      </div>
    </aside>
  )
}

export default Sidebar
