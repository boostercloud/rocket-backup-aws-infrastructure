"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyPointInTimeRecoveryBackup = void 0;
const applyPointInTimeRecoveryBackup = (tables) => {
    tables.map((table) => {
        table.node['host'].table.pointInTimeRecoverySpecification = {
            pointInTimeRecoveryEnabled: true,
        };
    });
};
exports.applyPointInTimeRecoveryBackup = applyPointInTimeRecoveryBackup;
