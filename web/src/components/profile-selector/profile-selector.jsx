import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import onClickOutside from 'react-onclickoutside'
import style from './profile-selector.module.css';
import util from '../../style/util.module.css'

function ProfileSelector() {
  const [isHidden, setIsHidden] = useState(true)

  ProfileSelector.handleClickOutside = () => setIsHidden(true);

  const increasedIndex = !isHidden ? style.elevatedZIndex : undefined

  const handleSignOut = () => {
    console.log('sign out')
  }

  return (
    <div className={`${style.profileWrapper} ${util.noselect} ${increasedIndex}`}>
      <div className={style.profile}>
        <IconContext.Provider value={{ size: "5vh", style: { verticalAlign: 'middle' }, color: 'white' }}>
          <CgProfile className={style.profileIcon} onClick={() => setIsHidden(isHidden ? false : true)} />
        </IconContext.Provider>
      </div>
      <div className={style.wrapper} hidden={isHidden}>
        <div className={`${style.username} ${util.noselect}`}>{'profile_name'}</div>
        <div className={style.innerWrapper}>
          <Link className={`${util.anchor} ${style.item}`} to={`/account`}><div className={util.noselect}>Account</div></Link>
          <div className={style.line}></div>
          <div className={`${style.item} ${util.noselect}`} onClick={() => handleSignOut()}><span>Sign Out</span></div>
          <div className={style.line}></div>
          <Link className={`${util.anchor} ${style.item}`} to={`/account`}><div className={util.noselect}>Completed 3/8</div></Link>
        </div>
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => ProfileSelector.handleClickOutside
};

export default onClickOutside(ProfileSelector, clickOutsideConfig)