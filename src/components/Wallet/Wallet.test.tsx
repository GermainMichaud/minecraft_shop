import { describe, expect, it } from 'vitest';

import { render, screen } from '../../utils/test-util';
import Wallet from '.';

describe('<Wallet />', () => {
  it('should render', () => {
    render(<Wallet />);
    const { getByTestId } = screen;
    expect(getByTestId('wallet')).toBeInTheDocument();
  });
});
