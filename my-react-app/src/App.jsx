import './App.css'

import FieldContainer from './components/FieldContainer'
import Header from './components/Header'
import FormControls from './components/FormControls'
import { dataFields } from './data/dataFields'
import Footer from './components/Footer'
import Results from './components/Results'

function App() {

  return (
    <>
      <Header />
      <section id="fields">
        <FieldContainer dataFields={dataFields} />
        <FieldContainer dataFields={dataFields} />
        <Results dataFields={dataFields}/>
      </section>
      <FormControls />
      <Footer />
    </>
  )
}

export default App
