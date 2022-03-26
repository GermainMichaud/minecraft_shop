import './BuyButton.scss';

import { FunctionComponent } from 'react';

import Button from '../shared/Button';

const BuyButton: FunctionComponent<{}> = () => (
  <Button title="Buy" data-testid="buy-button" className="BuyButton box green" />
);

export default BuyButton;
