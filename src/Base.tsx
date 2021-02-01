import React from 'react'
import { MonthPicker } from './components/MonthPicker'
import { YearAndMonth } from './types/YearAndMonth'
import { DraggableList } from './components/DraggableList'

export const Base = (): JSX.Element => {
  function handleChange(yearAndMonth: YearAndMonth) {
    console.log(yearAndMonth.format())
  }
  return (
    <>
      <MonthPicker handleChange={handleChange} defaultValue={YearAndMonth.now()} />
      <DraggableList/>
    </>
  )
}
