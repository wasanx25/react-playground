import styled from '@emotion/styled'

export const StyledDraggableList = styled.ul(
  {
    '& li': {
      width: '200px',
      padding: '10px 15px',
      borderRadius: '4px',
      backgroundColor: '#ccc'
    },
    '& li.clear': {
      opacity: 0
    },
    '& li.dragover': {
      borderTop: 'solid 3px #cdcdcd'
    }
  }
)

