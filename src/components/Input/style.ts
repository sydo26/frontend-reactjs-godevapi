import styled from 'styled-components'

const Input_ = styled.input`
  position: relative;
  width: 100%;
  padding: 12px 20px;
`

const Button_ = styled.div`
  position: relative;
  height: 100%;
`

const Div_ = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-width: 280px;
`

const Label_ = styled.label`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  transform: translateY(-30px);
`

const Object_ = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`

export { Input_, Div_, Label_, Object_, Button_ }
