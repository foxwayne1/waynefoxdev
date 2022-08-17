import styled from 'styled-components'
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  typography,
  background,
  border,
  position,
  shadow,
} from 'styled-system'

const Box = styled.div`
  box-sizing: border-box;
  min-width: 0;
  /* ${color}; */
  color: white;
  ${space};
  ${layout};
  ${flexbox};
  ${grid};
  ${typography};
  ${background};
  ${border};
  ${position};
  ${shadow};
`

export default Box
