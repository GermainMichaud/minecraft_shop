import './Caroussel.scss';

import { FunctionComponent } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { nextTool, previousTool, selectCurrentTool } from '../../store/shopSlice';
import Box from '../shared/Box';
import Button from '../shared/Button';
import ListImages from './ListImages';

const Caroussel: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const currentTool = useAppSelector(selectCurrentTool);
  if (!currentTool) return null;
  return (
    <>
      <Button
        title="Prev"
        className="CarousselButton-prev text-shadow"
        onClick={() => dispatch(previousTool())}
      />
      <Box className="Caroussel" data-testid="caroussel">
        <div className="Caroussel__body">
          <ListImages />
        </div>
      </Box>
      <Button
        title="Next"
        className="CarousselButton-next text-shadow"
        onClick={() => dispatch(nextTool())}
      />
    </>
  );
};

export default Caroussel;
