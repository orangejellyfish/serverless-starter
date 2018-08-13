import runWarm from '.';

describe('[Utility: runWarm]', () => {
  it('should return early if the event is from the scheduler', async () => {
    const handler = runWarm(() => {});

    expect(await handler({
      source: 'aws.events',
    })).toMatchSnapshot();
  });

  it('should invoke the handler function', async () => {
    const handler = jest.fn();
    const warmHandler = runWarm(handler);

    await warmHandler({});
    expect(handler).toHaveBeenCalled();
  });
});
