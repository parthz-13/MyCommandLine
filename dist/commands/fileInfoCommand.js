"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileInfoCommand = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const BaseCommand_1 = require("./BaseCommand");
class FileInfoCommand extends BaseCommand_1.BaseCommand {
    constructor() {
        super(...arguments);
        this.name = "fileinfo <filepath>";
        this.description = "Show basic information about a file or directory";
    }
    configure(command) {
        command.action(async (filepath) => {
            const resolved = path_1.default.resolve(process.cwd(), filepath);
            if (!fs_1.default.existsSync(resolved)) {
                console.error(`Path not found: ${resolved}`);
                process.exitCode = 1;
                return;
            }
            try {
                const stats = await fs_1.default.promises.stat(resolved);
                const type = stats.isDirectory() ? "directory" : "file";
                console.log(`Path: ${resolved}`);
                console.log(`Type: ${type}`);
                console.log(`Size: ${stats.size} bytes`);
            }
            catch (err) {
                console.error("Failed to read file info.");
                process.exitCode = 1;
            }
        });
    }
}
exports.FileInfoCommand = FileInfoCommand;
