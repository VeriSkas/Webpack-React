import React, { FC } from 'react';

import { Routing } from './providers/router/ui';
import { withProviders } from './providers';
import classes from './styles/themes/index.module.scss';
import { useThemeContext } from '../shared/lib/theme/useTheme';

const App: FC = () => {
  const [theme] = useThemeContext();

  return (
    <div className={`${classes.App} ${classes[theme]}`}>
      <Routing />
    </div>
  );
};

export default withProviders(() => <App />);
