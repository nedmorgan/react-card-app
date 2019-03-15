import styled, { keyframes } from 'styled-components'
import { wobble } from 'react-animations'

export const ImageContainer = styled.div`
display: flex;
justify-content: center;

img {
  height: 90vw;
  width: 80vw;
}

.balloon-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  position: absolute;
}

.heart {
  display: flex;
  width: 95vw;
}

.heartOne {
  justify-content: flex-start;
  margin-top: 10vw;
}

.heartTwo {
  justify-content: flex-end;
  margin-top: 20vw;
}

.heartThree {
  justify-content: flex-start;
  margin-top: 30vw;
}

.icon {
  font-size: 7vw;
}
`