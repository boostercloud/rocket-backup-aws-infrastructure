"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackupStack = void 0;
const aws_dynamodb_1 = require("@aws-cdk/aws-dynamodb");
const point_in_time_recovery_1 = require("./utils/point-in-time-recovery");
const on_demand_1 = require("./utils/on-demand");
const allowedBackupTypes = ['ON_DEMAND', 'POINT_IN_TIME'];
class BackupStack {
    static mountStack(params, stack) {
        if (allowedBackupTypes.includes(params.backupType)) {
            const tables = stack.node.children.filter((c) => c instanceof aws_dynamodb_1.Table);
            if (params.backupType === 'ON_DEMAND') {
                on_demand_1.applyOnDemandBackup(stack, params, tables);
            }
            else {
                point_in_time_recovery_1.applyPointInTimeRecoveryBackup(tables);
            }
        }
        else {
            throw Error('[Rocket][Backup] - backupType parameter is missing or is not supported. The available backup types are ON_DEMAND and POINT_IN_TIME');
        }
    }
}
exports.BackupStack = BackupStack;
