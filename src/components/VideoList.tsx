import React from 'react';
import Video, { VideoProps } from './Video';

function VideoList(props: { list: VideoProps[] }) {
  return (
    <>
      {props.list.map(item => <Video url={item.url} date={item.date} />)}
    </>
  );
}

export default VideoList;
