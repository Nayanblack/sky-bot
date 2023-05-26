const path = require("path");

exports.PREFIX = "/";
exports.BOT_EMOJI = "🤖";
exports.BOT_NAME = "Sky Bot";

exports.COMMANDS_DIR = path.join(__dirname, "commands");
exports.TEMP_DIR = path.resolve(__dirname, "..", "assets", "temp");

exports.TIMEOUT_IN_MILLISECONDS_BY_EVENT = 700;

exports.OPENAI_API_KEY = "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";
