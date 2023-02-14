// M1
// import log from "./log.js";
// export default log;

// M2
// export { default } from "./log.js";

// A module cannot have multiple default exports.
// export { default } from "./log.js";
// export { default } from "./log.js";

// M3
export { default as log1 } from "./log.js";
export { default as log2 } from "./log.js";
