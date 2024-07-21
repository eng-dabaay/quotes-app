import React from 'react';
import Quote from './Quote';

const QuotesList = ({ quotes, onLike }) => {
  return (
    <div className="quotes-list">
      {quotes.map(quote => (
        <Quote
          key={quote.id}
          text={quote.text}
          author={quote.author}
          likes={quote.likes}
          onLike={() => onLike(quote.id)}
        />
      ))}
    </div>
  );
};

export default QuotesList;
