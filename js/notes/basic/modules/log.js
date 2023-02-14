import { TYPE_LOG } from "./opts.js";

function log(log, type = TYPE_LOG) {
  console[type](log);
}

export default log;
