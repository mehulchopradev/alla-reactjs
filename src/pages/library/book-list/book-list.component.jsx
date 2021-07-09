import './book-list.styles.scss';

import { connect } from 'react-redux';

function BookList({ books }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <td>Id</td>
          <td>Title</td>
          <td>Details</td>
        </tr>
      </thead>
      <tbody>
        {
          books.map(({ id, title }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td><a href="#">Details</a></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => ({
  books: state.libraryReducer.books
})

export default connect(mapStateToProps)(BookList);