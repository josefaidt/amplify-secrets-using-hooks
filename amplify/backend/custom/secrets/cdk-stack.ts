const HEX = 'b620b2630981b9b51158fa8c1628501d4c0eb60d95e2bd7c3f0b9b39fbdccdc5'
const SNAPSHOT_PARAMETER_NAME = '/amplify/hooks/dev/secret/_snapshot'
import * as cdk from '@aws-cdk/core'
import * as AmplifyHelpers from '@aws-amplify/cli-extensibility-helper'
import { AmplifyDependentResourcesAttributes } from '../../types/amplify-dependent-resources-ref'
import * as ssm from '@aws-cdk/aws-ssm'

export class cdkStack extends cdk.Stack {
  constructor(
    scope: cdk.Construct,
    id: string,
    props?: cdk.StackProps,
    amplifyResourceProps?: AmplifyHelpers.AmplifyResourceProps
  ) {
    super(scope, id, props)
    /* Do not remove - Amplify CLI automatically injects the current deployment environment in this input parameter */
    new cdk.CfnParameter(this, 'env', {
      type: 'String',
      description: 'Current Amplify CLI env name',
    })
    /* AWS CDK code goes here - learn more: https://docs.aws.amazon.com/cdk/latest/guide/home.html */

    // const projectInfo = AmplifyHelpers.getProjectInfo()
    // const { envName } = require(path.resolve(
    //   'amplify/.config/local-env-info.json'
    // ))
    // const appId = require(path.resolve('amplify/team-provider-info.json'))?.[
    //   envName
    // ].awscloudformation.AmplifyAppId

    // const Tags = [
    //   { Key: 'amplify-app-name', Value: projectInfo.projectName },
    //   { Key: 'amplify-app-id', Value: appId },
    //   { Key: 'amplify-app-env', Value: envName },
    // ]

    // TODO: add tags
    const snapshot = new ssm.StringParameter(this, 'SecretsSnapshotParameter', {
      parameterName: SNAPSHOT_PARAMETER_NAME,
      stringValue: HEX,
    })
  }
}
