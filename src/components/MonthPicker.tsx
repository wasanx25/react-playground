import React, { useEffect, useState } from 'react'
import { YearAndMonth } from '../types/YearAndMonth'
import { Table } from './StyledTable'

interface MonthPickerProps {
  handleChange: (yearAndMonth: YearAndMonth) => void
  defaultValue: YearAndMonth
}

export const MonthPicker = (props: MonthPickerProps): JSX.Element => {
  const [isShow, setIsShow] = useState(false)
  const [year, setYear] = useState(parseInt(props.defaultValue.year))
  const [month, setMonth] = useState(parseInt(props.defaultValue.month))

  useEffect(() => {
    props.handleChange(YearAndMonth.fromString(`${year}-${month}`))
  }, [year, month])

  function changeMonth (month: number) {
    setMonth(month)
    setIsShow(false)
  }

  return (
    <>
      <input type='text'
             placeholder='month picker'
             value={year + '-' + month}
             onBlur={_e => setIsShow(false)}
             onFocus={_e => setIsShow(true)}
             readOnly
      />

      <Table role='month-picker-table' className={isShow ? 'active' : 'inactive'}>
        <thead>
        <tr>
          <th className='arrow' onClick={_e => setYear(year - 1)}>{'<'}</th>
          <th>{year}</th>
          <th className='arrow' onClick={_e => setYear(year + 1)}>{'>'}</th>
        </tr>
        </thead>

        <tbody>
        <tr>
          {[1, 2, 3].map(value => {
            return <td key={value} onMouseDown={_e => changeMonth(value)}>{value}月</td>
          })}
        </tr>
        <tr>
          {[4, 5, 6].map(value => {
            return <td key={value} onMouseDown={_e => changeMonth(value)}>{value}月</td>
          })}
        </tr>
        <tr>
          {[7, 8, 9].map(value => {
            return <td key={value} onMouseDown={_e => changeMonth(value)}>{value}月</td>
          })}
        </tr>
        <tr>
          {[10, 11, 12].map(value => {
            return <td key={value} onMouseDown={_e => changeMonth(value)}>{value}月</td>
          })}
        </tr>
        </tbody>
      </Table>
    </>
  )
}
