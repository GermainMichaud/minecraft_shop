import { describe, expect, it } from 'vitest';

import { render, screen } from '../../utils/test-util';
import BuyButton from '.';

describe('<BuyButton />', () => {
  it('should render', () => {
    render(<BuyButton />);
    const { getByTestId } = screen;
    expect(getByTestId('buy-button')).toBeInTheDocument();
  });
});
