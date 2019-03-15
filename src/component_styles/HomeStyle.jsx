import styled from 'styled-components'

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

.home-title {
  font-family: 'Srisakdi', cursive;
  font-size: 8vw;
}

h3 {
  font-family: 'Lato', sans-serif;
  font-size: 4vw;
  margin-top: 50vw;
  width: 50vw;
}

.home-title, h3 {
  color: tomato;
  background-color: none;
  position: absolute;
}

`