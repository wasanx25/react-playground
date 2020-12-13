import React from 'react'
import { MonthPicker } from './components/MonthPicker'

export const Base = (): JSX.Element => {
  function handleChange(yearAndMonth: string) {
    console.log(yearAndMonth)
  }
  return (
    <>
      <MonthPicker handleChange={handleChange} />
    </>
  )
}
