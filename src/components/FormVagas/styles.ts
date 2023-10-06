import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: #f9f5e7;
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const BotaoPesquisar = styled.button`
  background-color: #a7727d;
  border: 1px solid #a7727d;
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: #f9f5e7;
  margin-left: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 16px;
    padding: 8px;
  }
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: #a7727d;

  @media (max-width: 768px) {
    padding: 8px;
  }
`

// --cor-principal: #a7727d;
// --cor-secundaria: #f9f5e7;
