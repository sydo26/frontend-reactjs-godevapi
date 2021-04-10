import styled from 'styled-components'

const Parent_ = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  height: 86px;
  box-shadow: 0 4px 10px #2c2d6633;

  & > div {
    height: 100%;
  }
`

const Object_ = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Divide_ = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`

export { Parent_, Object_, Divide_ }
