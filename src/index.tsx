// Dependencies
import { render } from 'react-dom'
import Index from './pages/App'

// Components
const App = () => {
  return <Index />
}

render(<App />, document.querySelector('#root'))
