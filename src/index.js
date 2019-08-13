import timestamp from './utils/timestamp';
import './index.scss';

const now = timestamp();
const blastFromPast = timestamp('2018-12-24');

console.log(now, blastFromPast, process.env.NODE_ENV);
