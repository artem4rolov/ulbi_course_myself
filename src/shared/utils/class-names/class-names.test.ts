import { classNames } from './class-names'

test('Тест работы функции classNames', () => {
  expect(classNames('main', {}, [])).toBe('main')
})

test('Тест работы функции classNames с условными классами', () => {
  expect(classNames('main', { hovered: true, scrollable: false }, [])).toBe(
    'main hovered',
  )
})

test('Тест работы функции classNames с дополнительными классами', () => {
  expect(
    classNames('main', { hovered: true, scrollable: false }, [
      'testClass1',
      'testClass2',
    ]),
  ).toBe('main hovered testClass1 testClass2')
})

test('Тест работы функции classNames с undefined в условных и дополнительных классах', () => {
  expect(
    classNames('main', { hovered: true, scrollable: undefined }, [
      'testClass1',
      undefined,
    ]),
  ).toBe('main hovered testClass1')
})

test('Тест работы функции classNames с null и undefined в условных и дополнительных классах', () => {
  expect(
    classNames(
      'main',
      { hovered: true, scrollable: null, test: undefined, test2: true },
      [null, 'testClass1', undefined, 'testClass2'],
    ),
  ).toBe('main hovered test2 testClass1 testClass2')
})
