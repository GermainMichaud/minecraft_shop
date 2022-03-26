import { FunctionComponent } from 'react';

import { useAppSelector } from '../../store/hooks';
import { selectCurrentIndex, selectSpritePath, selectTools } from '../../store/shopSlice';
import ImageFromSprite from '../shared/ImageFromSprite';
// import ImageFromSprite from '../shared/ImageFromSprite';

// Size hardcoded...
const IMG_SIZE = 80;

const ListImages: FunctionComponent<{}> = () => {
  const tools = useAppSelector(selectTools);
  const currentIndex = useAppSelector(selectCurrentIndex);
  const spritePath = useAppSelector(selectSpritePath);
  return (
    <div
      className="list-images"
      style={{
        // Slide the div based on the current index and all passed gap space between images. And for center the image, with have to substract half of the image size.
        // eslint-disable-next-line prettier/prettier
        transform: `translateX(calc(${-currentIndex * IMG_SIZE}px - ${IMG_SIZE / 2}px - ${currentIndex}rem))`,
        // The width is based on the number of images and the gap space between images.
        width: `calc(${tools.length * IMG_SIZE}px + ${tools.length - 1}rem)`,
      }}
    >
      {tools.map((tool) => (
        <ImageFromSprite
          key={tool.key}
          position={tool.spritePosition}
          width={IMG_SIZE}
          height={IMG_SIZE}
          sprite={spritePath}
        />
      ))}
    </div>
  );
};

export default ListImages;
