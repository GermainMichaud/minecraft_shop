import './Caroussel.scss';

import { FunctionComponent } from 'react';

import Box from '../shared/Box';
import Button from '../shared/Button';
import ListImages from './ListImages';

const Caroussel: FunctionComponent = () => {
  return (
    <>
      <Button title="Prev" className="CarousselButton-prev text-shadow" />
      <Box className="Caroussel" data-testid="caroussel">
        <div className="Caroussel__body">
          <ListImages />
        </div>
      </Box>
      <Button title="Next" className="CarousselButton-next text-shadow" />
    </>
  );
};

export default Caroussel;
