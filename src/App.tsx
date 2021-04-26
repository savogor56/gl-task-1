import { Table } from './components/Table'
import { users } from './services/fakeData'

function App() {
  return (
    <>
      <Table users={users} />
    </>
  );
}
export default App;