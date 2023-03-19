import React, { Fragment} from 'react'
import { Beranda, Layanan, About } from '../../components'
const Home = () => {
  return (
    <Fragment>
      <Beranda/>
      <Layanan/>
      <About/>
    </Fragment>
  )
}

export default Home