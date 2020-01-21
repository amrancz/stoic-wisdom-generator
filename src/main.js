const data = [
  {
    id: 1,
    quote:
      'Choose not to be harmed — and you won’t feel harmed. Don’t feel harmed — and you haven’t been.',
    author: 'Marcus Aurelius',
  },
  {
    id: 2,
    quote:
      'External things are not the problem. It’s your assessment of them. Which you can erase right now.',
    author: 'Marcus Aurelius',
  },
  {
    id: 3,
    quote: 'Be tolerant with others and strict with yourself.',
    author: 'Marcus Aurelius',
  },
  {
    id: 4,
    quote: 'If a man knows not which port he sails, no wind is favorable.',
    author: 'Seneca',
  },
  {
    id: 5,
    quote:
      'How long are you going to wait before you demand the best for yourself?',
    author: 'Epictetus',
  },
  {
    id: 6,
    quote:
      'Don’t seek for everything to happen as you wish it would, but rather wish that everything happens as it actually will—then your life will flow well.',
    author: 'Epictetus',
  },
];

// Get HTML elements to populate

const quoteP = document.querySelector('#quote');
const authorSpan = document.querySelector('#author');

// Get random content

const selectedContent = data[Math.floor(Math.random() * data.length)];

// Function for populating the content

function populateContent() {
  quoteP.innerHTML = `"${selectedContent.quote}"`;
  authorSpan.innerHTML = `– ${selectedContent.author}`;
}

// Populating the content

populateContent();
