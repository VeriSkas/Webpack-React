import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import classes from './styles.module.scss';

const StartPage: FC<{}> = () => {
  return (
    <>
      <div className={classes.StartPage}>
        Start page
        <Outlet />
      </div>
    </>
  );
};

export default StartPage;
