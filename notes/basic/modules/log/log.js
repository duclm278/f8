import { TYPE_LOG } from "../options.js";

function log(log, type = TYPE_LOG) {
  console[type](log);
}

export default log;
