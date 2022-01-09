import React from 'react'
import { render } from '@testing-library/react'
import { MonthPicker } from '../../src/components/MonthPicker'
import { YearAndMonth } from '../../src/types/YearAndMonth'
import '@testing-library/jest-dom/extend-expect'

describe('MonthPicker', () => {
  test.skip('sample', () => {
    const {getByRole} = render(<MonthPicker handleChange={jest.fn()} defaultValue={YearAndMonth.now()}/>)

    const expected = [
      '<thead>',
      '<tr>',
      '<th class="arrow">&lt;</th>',
      '<th>2020</th>',
      '<th class="arrow">&gt;</th>',
      '</tr>',
      '</thead>'
    ].join('')
    // expect(getByRole('month-picker-table', { hidden: true})).toMatchSnapshot()
    expect(getByRole('month-picker-table', {hidden: true})).toContainHTML(expected)
  })
})
