import './book-form.styles.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function BookForm() {
  // book title is required. Min length = 5, max length = 10
  // book pages is required. Min length = 1
  /* const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Book title is required';
    } else if (values.title.length < 5 || values.title.length > 10) {
      errors.title = 'Book title to be between 5-10';
    }

    if (!values.pages) {
      errors.pages = 'Book pages is required';
    } else if (values.pages < 1) {
      errors.pages = 'Book pages to be min 1';
    }

    return errors;
  }; */

  return (
    <Formik
      initialValues={{
        title: '',
        price: 0,
        pages: 0,
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string()
          .min(5, 'Min length to be 5')
          .max(10, 'Max length to be 10')
          .required('Book title is required'),
        pages: Yup.number()
          .min(1, 'Min length to be 1')
          .required('Book pages is required')
      })}
    >
      <Form>
        <p>
          <Field type="text" name="title" placeholder="enter book title"/><br/>
          <ErrorMessage name="title"/>
        </p>
        <p>
          <Field type="number" name="pages" placeholder="enter book pages"/><br/>
          <ErrorMessage name="pages"/>
        </p>
        <p>
          <Field type="number" name="price" placeholder="enter book price"/>
        </p>
        <p>
          <button type="submit">Save</button>
        </p>
      </Form>
    </Formik>
  )
}


export default BookForm;