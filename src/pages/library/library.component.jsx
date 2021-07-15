import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import './library.styles.scss';

import BookList from './book-list/book-list.component';
import BookDetails from './book-details/book-details.component';
import { fetchBooksAsync } from '../../redux/library/library.actions';

function Library({ match, isBooksLoaded, dispatch/*, onSetBooks */ }) {
  useEffect(() => {
    dispatch(fetchBooksAsync())
  }, [dispatch]);

  return (
    <div>
      <h2>Library page</h2>
      <Route exact path={match.path}>
        <Redirect to={`${match.path}/book-list`} />
      </Route>
      {
        !isBooksLoaded
          ? (<h2>Loading... Please waitttt</h2>)
          : (
            <>
              <Route path={`${match.path}/book-list`} component={BookList}/>
              <Route path={`${match.path}/book-details/:bookId`} component={BookDetails}/>
            </>
          )
      }
    </div>
  )
}

/* const mapDispatchToProps = dispatch => ({
  onSetBooks: books => dispatch(setBooks(books))
}) */

const mapStateToProps = state => ({
  isBooksLoaded: state.libraryReducer.isBooksLoaded,
})

export default connect(mapStateToProps)(Library);