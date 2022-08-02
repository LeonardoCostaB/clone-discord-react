import { SideBar } from '../../components/SideBar'

import style from './style.module.scss';

export function Home() {
  return (
    <div className={style.home}>
        <SideBar />
    </div>
  );
};