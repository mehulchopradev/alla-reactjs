import moment from 'moment';

import { capitalize } from '../../utils/strings';

function TodoItem({ todo: { title, createdDate }, handleChange }) {
  return (
    <div className='todo-item'>
      <input type="checkbox" onClick={handleChange}/>
      <span>{capitalize(title)}</span>
      <span>({moment(createdDate).format('DD-MM-YYYY')})</span>
    </div>
  )
}

export default TodoItem;