import * as moment from 'moment';

export function print() {
  window.alert(`hello world. Time now: ${moment().format('YYYY-MM-DD HH:mm:ss')}`);
}