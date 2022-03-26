import { describe, expect, it } from 'vitest';

import { render, screen } from '../../utils/test-util';
import ToolDetail from '.';

describe('<ToolDetail />', () => {
  it('should render', () => {
    render(<ToolDetail />);
    const { getByTestId } = screen;
    expect(getByTestId('tool-detail')).toBeInTheDocument();
  });
});
