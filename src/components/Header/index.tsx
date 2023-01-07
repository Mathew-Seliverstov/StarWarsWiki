import React, { FC } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { Outlet, NavLink } from 'react-router-dom'

const Header: FC = () => (
  <>
    <header className={styles.header}>
      <img className={styles.img} alt="star wars logo" src="https://www.freepnglogos.com/uploads/star-wars-logo-png-10.png" />
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) => isActive ? classNames(styles.link, styles.active) : styles.link}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? classNames(styles.link, styles.active) : styles.link}
          to="/planets"
        >
          Planets
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? classNames(styles.link, styles.active) : styles.link}
          to="/characters"
        >
          Characters
        </NavLink>
      </nav>
    </header>
    <Outlet />
  </>
)

export default Header
