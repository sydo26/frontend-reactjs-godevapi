import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import Button from '../../components/Button'
import Text from '../../components/Text'

function Home(props: any) {
  const history = useHistory()

  return (
    <div>
      <Text text="Home" type="strong" />
      <Button
        text="Ir para conectores"
        onClick={() => history.push('/connectors')}
      />
    </div>
  )
}

function mapStateToProps(state: any) {
  return {
    theme: state.theme,
  }
}

export default connect(mapStateToProps)(Home)
