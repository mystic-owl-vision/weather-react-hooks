import { memo } from "react";
import moment from 'moment';

export const Celsius = memo(({ temp }) => {
    return temp.toFixed() + '℃';
});

export const UnixToDate = ({ unix }) => {
    return moment.unix(unix).format('dddd, MMM D');
};