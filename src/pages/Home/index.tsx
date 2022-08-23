import { useEffect } from 'react';

import { SideBar } from '../../components/SideBar';
import { Friends } from '../../components/Friends';

export function Home() {
    return (
        <div className="container">
            <SideBar />

            <Friends/>
        </div>
    );
};
