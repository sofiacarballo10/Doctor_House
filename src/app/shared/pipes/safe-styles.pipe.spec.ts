import { SafeStylesPipe } from './safe-styles.pipe';

describe('SafeStylesPipe', () => {
  it('create an instance', () => {
    const pipe = new SafeStylesPipe();
    expect(pipe).toBeTruthy();
  });
});
