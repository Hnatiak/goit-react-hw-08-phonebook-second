// import styles from './HomeViews.module.css';
// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';

// const HomeView = () => (
//   <div className={styles.container}>
//     {/* <h1 className={styles.title}>As you see, here is empty</h1> */}
//     <Suspense>
//       <Outlet/>
//     </Suspense>
//   </div>
// );

// export default HomeView;


// // import { TextField } from '@mui/material';
// import styles from './HomeViews.module.css';
// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
// import * as React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

// const HomeView = () => (
//   <div className={styles.container}>
//     {/* <h1 className={styles.title}>As you see, here is empty</h1> */}
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DateRangeCalendar']}>
//         <DateRangeCalendar />
//       </DemoContainer>
//     </LocalizationProvider>
//     <Suspense>
//       <Outlet/>
//     </Suspense>
//   </div>
// );


// export default HomeView;


import styles from './HomeViews.module.css';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

const HomeView = () => (
  <div className={styles.container}>
    <div style={{ marginBottom:'15px' }}>
      <div style={{ margin:'25px', display: 'flex', justifyContent: 'center' }}>
      <h1>Welcome to your PhoneBook</h1>
      </div>
      <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateRangeCalendar']}>
          <DateRangeCalendar />
        </DemoContainer>
      </LocalizationProvider>
      </div>
    </div>
    <Suspense>
      <Outlet/>
    </Suspense>
  </div>
);

export default HomeView;