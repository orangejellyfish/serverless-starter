// Utility function to handle Cloudwatch keep-alive ping events. By wrapping
// Lambda handler functions in this higher-order function we can keep the
// container running our code alive which reduces the chances of slow cold
// starts, thereby improving the performance of our Lambdas.
const runWarm = (handler) => async (event, ...rest) => {
  if (event.source === 'aws.events') {
    return 'pinged';
  }

  return handler(event, ...rest);
};

export default runWarm;
