import { describe, expect, it } from 'vitest';

import { render, screen } from '../../utils/test-util';
import Caroussel from '.';

describe('<Caroussel />', () => {
  it('should render', () => {
    render(<Caroussel />);
    const { getByTestId } = screen;
    expect(getByTestId('caroussel')).toBeInTheDocument();
  });
});
