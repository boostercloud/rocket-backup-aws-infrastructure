"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const backup_stack_1 = require("./backup-stack");
const AWSBackup = (params) => ({
    mountStack: backup_stack_1.BackupStack.mountStack.bind(null, params),
});
exports.default = AWSBackup;
