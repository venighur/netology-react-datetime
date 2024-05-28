import React from 'react';
import { DateTimePretty } from './DateTimePretty';

export type VideoProps = {
  url: string
  date: string
}

function Video(props: VideoProps) {
  return (
    <div className="video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" title={props.date} allowFullScreen />
      <DateTimePretty date={props.date} />
    </div>
  )
}

export default Video;
