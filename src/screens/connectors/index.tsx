import React from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Navbar from '../../components/Navbar'
import Text from '../../components/Text'

function Connectors(props: any) {
  return (
    <>
      <Navbar />
      <Container bgSrc="/assets/images/background.svg">
        <Text
          text="Conectores"
          type="strong"
          weight="bolder"
          size="giant"
          style={{ width: '100%' }}
        />
        <Form style={{ marginTop: 40 }}>
          <Input text="Encontrar conector" placeholder="Pesquisa" />
          <Button text="Testando" size="small" />
        </Form>
      </Container>
    </>
  )
}

function mapStateToProps(state: any) {
  return {
    theme: state.theme,
  }
}

export default connect(mapStateToProps)(Connectors)
