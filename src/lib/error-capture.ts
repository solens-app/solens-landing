let lastCapturedError: unknown = null;

function capture(error: unknown) {
  lastCapturedError = error;
}

if (typeof process !== "undefined" && typeof process.on === "function") {
  process.on("uncaughtException", capture);
  process.on("unhandledRejection", capture);
}

export function consumeLastCapturedError(): unknown {
  const error = lastCapturedError;
  lastCapturedError = null;
  return error;
}
