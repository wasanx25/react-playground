import React from 'react'
import { StyledDraggableList } from './StyledDraggableList'

const DRAGGABLE_LIST_ID = 'item-list'
const DATA_TRANSFER_ID = 'item-id'

export const DraggableList = (): JSX.Element => {
  function drag (event: React.DragEvent) {
    event.dataTransfer.setData(DATA_TRANSFER_ID, event.currentTarget.id)
  }

  function drop (event: React.DragEvent) {
    event.dataTransfer.dropEffect = 'move'

    const item = event.dataTransfer.getData(DATA_TRANSFER_ID)
    const element = document.getElementById(item)!
    const itemList = document.getElementById(DRAGGABLE_LIST_ID)!
    itemList.insertBefore(element, event.currentTarget)

    event.currentTarget.className = ''
  }

  function dragLeave (event: React.DragEvent) {
    event.currentTarget.className = ''
  }

  function dragOver (event: React.DragEvent) {
    event.preventDefault()
    event.currentTarget.className = 'dragover'
  }

  return (
    <>
      <StyledDraggableList id={DRAGGABLE_LIST_ID}>
        {[1, 2, 3, 4, 5].map(v => {
          return (
            <li key={v} draggable id={'drag-item-' + v} onDragStart={drag} onDrop={drop} onDragOver={dragOver}
                onDragLeave={dragLeave}>{v} Draggable Text
            </li>
          )
        })}
      </StyledDraggableList>
    </>
  )
}
