import React, { useEffect, useState } from 'react'

interface MonthPickerProps {
  handleChange: (yearAndMonth: string) => void
}

export const MonthPicker = (props: MonthPickerProps): JSX.Element => {
  const [isShow, setIsShow] = useState(false)
  const [year, setYear] = useState(2020)
  const [month, setMonth] = useState(12)

  useEffect(() => {
    props.handleChange(`${year}-${month}`)
  }, [year, month])

  function changeMonth(month: number) {
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

      <table className={isShow ? 'active' : 'inactive'}>
        <thead>
        <tr>
          <th onClick={_e => setYear(year - 1)}>{'<'}</th>
          <th>{year}</th>
          <th onClick={_e => setYear(year + 1)}>{'>'}</th>
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
      </table>

      <style jsx>{`
        .active {
          opacity: 1;
        }
        
        .inactive {
          opacity: 0;
        }

        table {
          position: absolute;
          z-index: 100;
          transition-property: opacity;
          transition-duration: .5s;
          background-color: #ffffff;
          margin: 1rem 0;
        }
        
        th:first-child:hover,
        th:last-child:hover,
        td:hover {
          background-color: #f5f3f3;
        }
        
        th, td {
          padding: .5rem 1rem;
          text-align: center;
        }
        
        th:first-child, th:last-child, td {
          cursor: pointer;
        }
      `}</style>
    </>
  )
}
