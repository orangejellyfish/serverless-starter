// Custom migration for the serverless-plugin-split-stacks module. We use this
// to produce nested CloudFormation stacks to work around the hard limit of 200
// resources per stack. The default "per function" behaviour of the plugin is
// fine in most cases but results in circular dependencies in some cases, so we
// need to leave Cognito-specific functions in the root stack alongside the
// Cognito resources.
//
// Returning false from this function means the resource in question remains in
// the root stack (created by the Serverless Framework). Returning an object
// means the resource is moved into a nested stack, using the "destination" key
// as part of the stack name. Returning falsy (but not the value false itself)
// results in the default behaviour as defined by the plugin.
//
// See https://github.com/dougmoscrop/serverless-plugin-split-stacks.
// See https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-lambdaconfig.html.
const COGNITO_TRIGGERS = [
  'CreateAuthChallenge',
  'CustomMessage',
  'DefineAuthChallenge',
  'PostAuthentication',
  'PostConfirmation',
  'PreAuthentication',
  'PreSignUp',
  'PreTokenGeneration',
  'UserMigration',
  'VerifyAuthChallengeResponse',
];

module.exports = (resource, logicalId) => {
  if (COGNITO_TRIGGERS.some((trigger) => logicalId.startsWith(trigger))) {
    return false;
  }

  return null;
};
