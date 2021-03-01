import { Stack } from '@aws-cdk/core';
export declare type BackupStackParams = {
    backupType: string;
    onDemandBackupRules?: OnDemandBackupRules;
};
export declare type OnDemandBackupRules = {
    minute?: string;
    hour?: string;
    day?: string;
    month?: string;
    weekDay?: string;
    year?: string;
};
export declare class BackupStack {
    static mountStack(params: BackupStackParams, stack: Stack): void;
}
