import uid from '../../src/functions/uid'

describe('Unique Identification', () => {
  test('should return a 25-character value', () => {
    expect(uid()).toHaveLength(25)
  })
})
