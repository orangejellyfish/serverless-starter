import { hello } from '.';

describe('[Function: hello]', () => {
  it('should return the expected response', async () => {
    expect(await hello({})).toMatchSnapshot();
  });
});
