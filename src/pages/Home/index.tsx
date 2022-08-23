import { SideBar } from '../../components/SideBar';
import { Friends } from '../../components/Friends';

import style from './style.module.scss';

export function Home() {
  return (
    <div className="container">
        <SideBar />

        <Friends/>
    </div>
  );
};
