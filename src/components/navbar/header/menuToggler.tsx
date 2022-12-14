import React, {FC, MouseEventHandler} from 'react'
import Path from './path'

type MenuTogglerProps = {toggle: MouseEventHandler<HTMLButtonElement>}
const MenuToggler: FC<MenuTogglerProps> = ({toggle}) => {
  return (
    <button onClick={toggle} className="focus:outline-none  absolute top-5 ">
      <svg width="25" height="25" viewBox="0 0 23 23">
        <Path openPath="M 3 16.5 L 17 2.5" closedPath="M 2 2.5 L 20 2.5" />
        <Path closedPath="M 2 9.423 L 20 9.423" openPath="" />
        <Path
          closedPath="M 2 16.346 L 20 16.346"
          openPath="M 3 2.5 L 17 16.346"
        />
      </svg>
    </button>
  )
}

export default MenuToggler
