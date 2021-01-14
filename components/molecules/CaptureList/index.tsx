import * as React from 'react';
import dayjs from 'dayjs';

import { Presenter, PresentedCapture } from './Presenter';
import { Capture } from '../../../types/Capture';

interface Props {
  captureList: Capture[];
}

const CaptureList = (props: Props) => {
  const { captureList } = props;
  const convertedList: PresentedCapture[] = captureList.map((capture) => ({
    name: capture.name,
    createdAt: dayjs(capture.createdAt).format('YYYY/MM/DD'),
  }));
  return <Presenter captureList={convertedList} />;
};

export { CaptureList };
