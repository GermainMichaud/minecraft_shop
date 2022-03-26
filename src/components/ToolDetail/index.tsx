import './ToolDetail.scss';

import { FunctionComponent } from 'react';

import Box from '../shared/Box';
import ImageFromSprite from '../shared/ImageFromSprite';

const ToolDetail: FunctionComponent<{}> = () => (
  <Box className="ToolDetail" data-testid="tool-detail">
    <div className="ToolDetail__title">Tool name</div>
    <div className="ToolDetail__body">
      <ImageFromSprite />
      <div className="ToolDetail__body__details">
        <div className="ToolDetail__body__details__row">
          INTEGRITY <span>24</span>
        </div>
        <div className="ToolDetail__body__details__row">
          DAMAGE <span>+62</span>
        </div>
        <div className="ToolDetail__body__details__row">
          COST <span>121</span>
        </div>
      </div>
    </div>
  </Box>
);

export default ToolDetail;
