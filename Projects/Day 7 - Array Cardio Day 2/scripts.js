   // ## Array Cardio Day 2

   const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  const year = (new Date()).getFullYear();
  
  // Array.prototype.some() // is at least one person 19 or older?
  const some_19 = people.some((i) => {
    return year - i.year >= 19 ? true : false;
  })
  
  // Array.prototype.every() // is everyone 19 or older?
  const all_19 = people.every((i) => {
    return year - i.year >= 19 ? true : false;
  })

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  const comment = comments.find((com) => com.id === 823423);
  
  // Array.prototype.findIndex()
  // Find the comment with this ID
  const index = comments.findIndex((i) => {
    return i.id === 823423;
  })
  
  // delete the comment with the ID of 823423
  const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
  ];
  // comments.splice(index, 1);