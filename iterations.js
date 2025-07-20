
    const mybooks = [
  {
    "book_name": "Atomic Habits",
    "category": "Self-help",
    "price": 16.99
  },
  {
    "book_name": "Clean Code",
    "category": "Programming",
    "price": 29.99
  },
  {
    "book_name": "The Lean Startup",
    "category": "Business",
    "price": 18.50
  },
  {
    "book_name": "A Brief History of Time",
    "category": "Science",
    "price": 14.95
  },
  {
    "book_name": "1984",
    "category": "Fiction",
    "price": 9.99
  },
  {
    "book_name": "The Art of War",
    "category": "Philosophy",
    "price": 11.00
  },
  {
    "book_name": "The Pragmatic Programmer",
    "category": "Programming",
    "price": 33.99
  },
  {
    "book_name": "Rich Dad Poor Dad",
    "category": "Finance",
    "price": 12.99
  },
  {
    "book_name": "Thinking, Fast and Slow",
    "category": "Psychology",
    "price": 15.75
  },
  {
    "book_name": "To Kill a Mockingbird",
    "category": "Fiction",
    "price": 10.49
  }
]

const totalCost = mybooks.filter((item) => item.category === "Programming")
                         .reduce( (acc,item) => acc+item.price,0 )
console.log(totalCost)

const myNums = [1,2,3,4,5,6,7,8,9,10]

newNums = myNums.map((item) => item * 10 )
                .map((item) => item + 5)
                .filter((item ) => item > 60 )
console.log(newNums)