import * as React from 'react';
import { Presenter } from './Presenter';

import { Capture } from '../../../types/Capture';

interface Props {
  captureList: Capture[];
}

const CaptureList = (props: Props) => {
  const { captureList } = props;
  return <Presenter captureList={captureList} />;
};

export { CaptureList };
