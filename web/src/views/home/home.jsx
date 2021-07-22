import React from "react";
import { ReactComponent as AlgoTrainerLogo } from '../../media/logo.svg';
import { IconContext } from "react-icons";
import { BsFillTerminalFill } from "react-icons/bs";
import { SiPython } from "react-icons/si"
import { BiFile } from "react-icons/bi"
import { Link } from 'react-router-dom'
import NavBar from '../../components/nav-bar/nav-bar'
import style from './home.module.css'
import util from '../../style/util.module.css'

export default function Home() {
  return (
    <div className={style.root}>
      <NavBar />
      <div className={style.wrapper}>
        <div className={style.innerWrapper}>
          <div className={`${style.banner} ${util.noselect}`}>
            <AlgoTrainerLogo className={style.svgLogo} />
            <div className={style.titleWrapper}>
              <div className={style.title}>AlgoTrainer</div>
              <Link className={util.anchor} to={'/code?id=1'}><button className={style.button}>Start Coding</button></Link>
            </div>
          </div>
          <div className={style.items}>
            <div className={style.item}>
              <div className={style.minIconSize}>
                <IconContext.Provider value={{ size: `45px`, style: { verticalAlign: 'middle' }, color: 'white' }}>
                  <BsFillTerminalFill />
                </IconContext.Provider>
              </div>
              <span className={`${style.itemText} ${style.itemTitle}`}>Online IDE</span>
              <span className={style.itemText}>Practice your algorithm proficiency in an online development environment</span>
            </div>
            <div className={style.item}>
              <div className={style.minIconSize}>
                <IconContext.Provider value={{ size: `45px`, style: { verticalAlign: 'middle' }, color: 'white' }}>
                  <SiPython />
                </IconContext.Provider>
              </div>
              <span className={`${style.itemText} ${style.itemTitle}`}>Several Languages</span>
              <span className={style.itemText}>Utilize several languages to grow your skills across multiple areas</span>
            </div>
            <div className={style.item}>
              <div className={style.minIconSize}>
                <IconContext.Provider value={{ size: `45px`, style: { verticalAlign: 'middle' }, color: 'white' }}>
                  <BiFile />
                </IconContext.Provider>
              </div>
              <span className={`${style.itemText} ${style.itemTitle}`}>Submissions</span>
              <span className={style.itemText}>View all of your successful submissions and compare your strategies</span>
            </div>
          </div>
          <footer className={style.footer}>
            <ul className={style.footerFlex}>
              <li className={style.footerItem}>© 2021 AlgoTrainer</li>
              <li className={style.footerItem}><a href={'/'} target={"_blank"} rel={"noopener noreferrer"}>GitHub</a></li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
}

