import runWarm from '../../utils/run-warm';

// Lambda handler. We are using an async function to simplify the code and
// remove the need to use a callback.
//
// Addtionally, the handler is wrapped in the "run warm" utility which will handle events
// from the scheduler, keeping our actual handler logic clean.

// eslint-disable-next-line import/prefer-default-export
export const hello = runWarm(async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  return response;
});
