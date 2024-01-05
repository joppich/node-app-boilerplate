import { Roarr as logger } from 'roarr';
import ConcatGreeter from './concat.js';

const result = ConcatGreeter(["Foo", "Bar", "Baz"])
logger.info(`${result}`);
