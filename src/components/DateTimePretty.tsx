import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import DateTime from './DateTime';

const withPretty = (Component: React.FunctionComponent<{ date: string }>) => {
  return (props: { date: string }) => {
    return Component.apply(this, [{ date: moment(props.date).fromNow() }]);
  }
}

export const DateTimePretty = withPretty(DateTime);
