import { truncateString, abbreviationNum, formatTimeSeconds } from '../src/utils'

test('Func truncateString works', () => {
  expect(truncateString('123456789', 5)).toBe('12345...')
  expect(truncateString('123456789', 10)).toBe('123456789')
  expect(truncateString('123456789', 1)).toBe('1...')
})

test('Func abbreviationNum works', () => {
  expect(abbreviationNum(0)).toBe('0')
  expect(abbreviationNum(1)).toBe('1')
  expect(abbreviationNum(10)).toBe('10')
  expect(abbreviationNum(100)).toBe('100')
  expect(abbreviationNum(1000)).toBe('1K')
  expect(abbreviationNum(10000)).toBe('10K')
  expect(abbreviationNum(100000)).toBe('100K')
  expect(abbreviationNum(1000000)).toBe('1M')
  expect(abbreviationNum(10000000)).toBe('10M')
  expect(abbreviationNum(100000000)).toBe('100M')
  expect(abbreviationNum(1000000000)).toBe('1B')
  expect(abbreviationNum(10000000000)).toBe('10B')
})

test('Function formatTimeSeconds works', () => {
  expect(formatTimeSeconds(0)).toBe('00:00')
  expect(formatTimeSeconds(1)).toBe('00:01')
  expect(formatTimeSeconds(10)).toBe('00:10')
  expect(formatTimeSeconds(60)).toBe('01:00')
  expect(formatTimeSeconds(61)).toBe('01:01')
  expect(formatTimeSeconds(60 * 60)).toBe('01:00:00')
  expect(formatTimeSeconds(60 * 60 + 1)).toBe('01:00:01')
  expect(formatTimeSeconds(60 * 60 * 24)).toBe('24:00:00')
  expect(formatTimeSeconds(60 * 60 * 24 + 1)).toBe('24:00:01')
})
