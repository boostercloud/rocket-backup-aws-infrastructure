import { BackupStackParams } from './backup-stack';
import { InfrastructureRocket } from '@boostercloud/framework-provider-aws-infrastructure';
declare const AWSBackup: (params: BackupStackParams) => InfrastructureRocket;
export default AWSBackup;
