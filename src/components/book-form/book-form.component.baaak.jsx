import './book-form.styles.scss';
import React, { useRef } from 'react';

function BookForm() {
  const titleRef = useRef();
  const priceRef = useRef();
  const pagesRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = titleRef.current.value;
    const price = priceRef.current.value;
    const pages = pagesRef.current.value;

    console.log(title, price, pages);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          name="title"
          placeholder="enter book title"
          ref={titleRef}
        />
      </p>
      <p>
        <input
          type="number"
          name="pages"
          placeholder="enter book pages"
          defaultValue="0"
          ref={pagesRef}
        />
      </p>
      <p>
        <input
          type="number"
          name="price"
          placeholder="enter book price"
          ref={priceRef}
        />
      </p>
      <p>
        <button type="submit">Save</button>
      </p>
    </form>
  )
}

export default BookForm;