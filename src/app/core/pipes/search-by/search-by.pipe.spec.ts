import { SearchByPipe } from './search-by.pipe';

describe('SearchByPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filtered data from Array', () => {
    const pipe = new SearchByPipe();

    const testData = [
      {
        id: 1,
        title: 'Video Course 1. Name tag',
        date: '29 Oct, 2019',
        duration: 98,
        description: 'Test description'
      }
    ];

    expect(pipe.transform(testData, 'Video')).toEqual(testData);
  });
});
