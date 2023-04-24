import styles from './HomeViews.module.css';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const HomeView = () => (
  <div className={styles.container}>
    {/* <h1 className={styles.title}>As you see, here is empty</h1> */}
    <Suspense>
      <Outlet/>
    </Suspense>
  </div>
);

export default HomeView;