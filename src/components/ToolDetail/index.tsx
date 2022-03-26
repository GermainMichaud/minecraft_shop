import './ToolDetail.scss';

import { FunctionComponent } from 'react';

import { useAppSelector } from '../../store/hooks';
import { selectCurrentTool, selectSpritePath } from '../../store/shopSlice';
import Box from '../shared/Box';
import ImageFromSprite from '../shared/ImageFromSprite';

// Image size hardcoded...
const IMG_SIZE = 80;

const ToolDetail: FunctionComponent<{}> = () => {
  const currentTool = useAppSelector(selectCurrentTool);
  const spritePath = useAppSelector(selectSpritePath);
  return (
    <Box className="ToolDetail" data-testid="tool-detail">
      <div className="ToolDetail__title">{currentTool.name}</div>
      <div className="ToolDetail__body">
        <ImageFromSprite
          position={currentTool.spritePosition}
          width={IMG_SIZE}
          height={IMG_SIZE}
          sprite={spritePath}
        />
        <div className="ToolDetail__body__details">
          <div className="ToolDetail__body__details__row">
            INTEGRITY <span>{currentTool.integrity}</span>
          </div>
          <div className="ToolDetail__body__details__row">
            DAMAGE <span>+{currentTool.damage}</span>
          </div>
          <div className="ToolDetail__body__details__row">
            COST <span>{currentTool.cost}</span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ToolDetail;
