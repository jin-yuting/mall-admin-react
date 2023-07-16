import GetRouters from './router/index';
import BeforeRouter from './components/beforeRouter';
function App() {
  return(
    <>
    <BeforeRouter>
      <GetRouters />
    </BeforeRouter>
    </>
  )
}
export default App;