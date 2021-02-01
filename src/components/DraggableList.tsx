import React from 'react'
import { StyledDraggableList } from './StyledDraggableList'

export const DraggableList = (): JSX.Element => {
  function drag (event: React.DragEvent) {
    event.dataTransfer.setData('item-id', event.currentTarget.id)
  }

  function drop (event: React.DragEvent) {
    event.dataTransfer.dropEffect = 'move'
    const item = event.dataTransfer.getData('item-id')
    const element = document.getElementById(item)!
    event.currentTarget.insertBefore(element, null)
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
      <StyledDraggableList>
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
