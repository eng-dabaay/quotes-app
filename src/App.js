import React, { useState } from 'react';
import QuotesList from './QuotesList';
import Sidebar from './Sidebar';
import './App.css';

const initialQuotes = [
  { id: 1, text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela", category: "Inspirational", likes: 0 },
  { id: 2, text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", category: "Motivational", likes: 0 },
  { id: 3, text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs", category: "Life", likes: 0 },
  { id: 4, text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt", category: "Life", likes: 0 },
  { id: 5, text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", author: "Oprah Winfrey", category: "Inspirational", likes: 0 },
  { id: 6, text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron", category: "Motivational", likes: 0 },
  { id: 7, text: "Life is what happens when you're busy making other plans.", author: "John Lennon", category: "Life", likes: 0 },
  { id: 8, text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa", category: "Love", likes: 0 },
  { id: 9, text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt", category: "Wisdom", likes: 0 },
  { id: 10, text: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead", category: "Wisdom", likes: 0 },
  { id: 11, text: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson", category: "Wisdom", likes: 0 },
  { id: 12, text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "Inspirational", likes: 0 },
  { id: 13, text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin", category: "Wisdom", likes: 0 },
  { id: 14, text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller", category: "Love", likes: 0 },
  { id: 15, text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle", category: "Inspirational", likes: 0 },
  { id: 16, text: "Whoever is happy will make others happy too.", author: "Anne Frank", category: "Life", likes: 0 },
  { id: 17, text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson", category: "Motivational", likes: 0 },
  { id: 18, text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson", category: "Love", likes: 0 }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Inspirational");
  const [quotes, setQuotes] = useState(initialQuotes);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleLike = (quoteId) => {
    const updatedQuotes = quotes.map(quote => {
      if (quote.id === quoteId) {
        return { ...quote, likes: quote.likes + 1 };
      }
      return quote;
    });
    setQuotes(updatedQuotes);
  };

  const filteredQuotes = quotes.filter(quote => quote.category === selectedCategory);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Quotes App</h1>
      </header>
      <div className="app-body">
        <Sidebar onCategorySelect={handleCategorySelect} />
        <QuotesList quotes={filteredQuotes} onLike={handleLike} />
      </div>
    </div>
  );
}

export default App;
