import { AddFivePipe } from './add-five.pipe';

describe('AddFivePipe', () => {
  it('create an instance', () => {
    const pipe = new AddFivePipe();
    expect(pipe).toBeTruthy();
  });
});
