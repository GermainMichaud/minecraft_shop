import { FunctionComponent } from 'react';

interface IImageFromSpriteProps {
  sprite: string;
  width: number;
  height: number;
  position: {
    x: number;
    y: number;
  };
}

const ImageFromSprite: FunctionComponent<IImageFromSpriteProps> = ({
  sprite,
  width,
  height,
  position,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${sprite})`,
        backgroundPosition: `-${position.x * width}px -${position.y * height}px`,
        backgroundRepeat: 'no-repeat',
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
};

export default ImageFromSprite;
