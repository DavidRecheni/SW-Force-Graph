import styled, { css } from 'styled-components'

export const ContainerInput = styled.div`

display: flex;
position: absolute;
z-index: 1;

${props => props.hCenter && css`
left: 50%;
transform: translate(-50%, -50%);

`}

${props => props.bottom && css`
  bottom: 20px;
`}

${props => props.right && css`
  right: 20px;
`}

${props => props.left && css`
  left: 20px;
`}

${props => props.top && css`
  top: 20px;
`}
  
`

