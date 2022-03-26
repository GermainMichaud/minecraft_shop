import { FunctionComponent } from 'react';

import ImageFromSprite from '../shared/ImageFromSprite';

const ListImages: FunctionComponent<{}> = () => {
  return (
    <div className="list-images">
      {/* Map items */}
      <ImageFromSprite />
    </div>
  );
};

export default ListImages;
