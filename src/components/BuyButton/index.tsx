import './BuyButton.scss';

import { FunctionComponent } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { buyTool, selectCurrentTool } from '../../store/shopSlice';
import Button from '../shared/Button';

const BuyButton: FunctionComponent<{}> = () => {
  const dispatch = useAppDispatch();
  const currentTool = useAppSelector(selectCurrentTool);
  if (!currentTool) return null;
  return (
    <Button
      title="Buy"
      data-testid="buy-button"
      className="BuyButton box green text-shadow"
      onClick={() => dispatch(buyTool())}
    />
  );
};

export default BuyButton;
