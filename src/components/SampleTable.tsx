import React from "react";

export const SampleTable = (): JSX.Element => {
  return (
    <table>
      <caption>Sample Table</caption>
      <tbody>
        <tr>
          <th scope="rowgroup" rowSpan={3}>
            Group1
          </th>
          <th scope="row">RowHeader1</th>
          <td>Test1</td>
        </tr>
        <tr>
          <th scope="row">RowHeader2</th>
          <td>Test2</td>
        </tr>
        <tr>
          <th scope="row">RowHeader3</th>
          <td>Test3</td>
        </tr>
      </tbody>
    </table>
  );
};
