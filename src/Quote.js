import React, { useState } from 'react';

const Quote = ({ text, author, likes, onLike }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${text} - ${author}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); 
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="quote-card">
      <p className="quote-text">{text}</p>
      <p className="quote-author">- {author}</p>
      <div className="quote-actions">
        <button onClick={onLike}>Like ({likes})</button>
        <button onClick={handleCopy} className="copy-button">
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default Quote;
