import { Table } from './components/Table'
import { users } from './services/fakeData'

import s from './style.module.scss'

function App() {
  return (
    <div className={s.root}>
      <h1>Users</h1>
      <Table users={users} />
    </div>
  );
}
export default App;