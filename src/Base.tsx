import React from "react";
import { MonthPicker } from "./components/MonthPicker";
import { YearAndMonth } from "./types/YearAndMonth";
import { DraggableList } from "./components/DraggableList";
import { SampleTable } from "./components/SampleTable";

export const Base = (): JSX.Element => {
  function handleChange(yearAndMonth: YearAndMonth) {
    console.log(yearAndMonth.format());
  }
  return (
    <>
      <SampleTable />
    </>
  );
};
