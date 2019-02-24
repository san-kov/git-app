import styled from 'styled-components'

export default styled.button`
  border: 0;
  padding: 10px 25px 10px 25px;

  color: rgb(99, 206, 114);
  font-size: 18 px;
  font-weight: bold;
  text-transform: uppercase;
  background: green;
  cursor: pointer;
  border: 5px solid rgb(99, 206, 114);
  background: 0;
  transition: all 0.2s 0.01s ease-in-out;
  outline: none;
  &:hover {
    padding-right: 45px;
    padding-left: 45px;
    text-align: center;
    background: rgb(99, 206, 114);
    color: white;
  }
`
