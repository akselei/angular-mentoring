import { TimeFormatPipe } from './time-format.pipe';

describe('TimeFormatPipe', () => {
  it('should change number to formatted time (HH MM)', () => {
    const pipe = new TimeFormatPipe();
    expect(pipe.transform(98)).toEqual('1h 38 min');
  });
  it('should change number to formatted time without hours (MM)', () => {
    const pipe = new TimeFormatPipe();
    expect(pipe.transform(45)).toEqual('45 min');
  });
});
