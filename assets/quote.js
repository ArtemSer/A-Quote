$(document).ready(function() {
  const quoteList = [
    {
      author : "Steve Jobs",
      quote : "Innovation is saying no to a thousand things."
    },
    {
      author : "Steve Jobs",
      quote :
          "A lot of times, people don't know what they want until you show it to them."
    },
    {
      author : "Steve Jobs",
      quote :
          "Quality is more important than quantity. One home run is much better than two doubles."
    },
    {
      author : "Steve Jobs",
      quote :
          "Half of what separates successful entrepreneurs from the non-successful ones is pure perseverance."
    },
    {
      author : "Steve Jobs",
      quote :
          "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."
    },
    {
      author : "Steve Jobs",
      quote :
          "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time."
    },
    {
      author : "Steve Jobs",
      quote :
          "Design is not just what it looks and feels like. Design is how it works."
    },
    {
      author : "Steve Jobs",
      quote :
          "I'm the only person I know that's lost a quarter of a billion dollars in one year... It's very character-building."
    },
    {
      author : "Steve Jobs",
      quote : "That's been one of my mantras--focus and simplicity."
    },
    {
      author : "Steve Jobs",
      quote :
          "Your time is limited, so don't waste it living someone else's life."
    },
    {
      author : "Bill Gates",
      quote :
          "Success is a lousy teacher. It seduces smart people into thinking they can't lose."
    },
    {
      author : "Bill Gates",
      quote :
          "It's fine to celebrate success but it is more important to heed the lessons of failure."
    },
    {
      author : "Bill Gates",
      quote :
          "We all need people who will give us feedback. That's how we improve."
    },
    {
      author : "Bill Gates",
      quote :
          "Your most unhappy customers are your greatest source of learning."
    },
    {author : "Bill Gates", quote : "People always fear change."},
    {
      author : "Bill Gates",
      quote :
          "Most people overestimate what they can do in one year and underestimate what they can do in ten years."
    },
    {
      author : "Bill Gates",
      quote :
          "Don't compare yourself with anyone in this world. If you do, you are insulting yourself."
    },
    {
      author : "Bill Gates",
      quote : "If you can't make it good, at least make it look good."
    },
    {
      author : "Bill Gates",
      quote :
          "Our success has really been based on partnerships from the very beginning."
    },
    {
      author : "Bill Gates",
      quote :
          "Our success has really been based on partnerships from the very beginning."
    },
    {
      author : "Bill Gates",
      quote : "To win big, you sometimes have to take big risks."
    },
    {
      author : "Bill Gates",
      quote : " \"I don't know\" has become \"I don't know yet.\""
    },
    {
      author : "Warren Buffett",
      quote :
          "Someone is sitting in the shade today because someone planted a tree a long time ago."
    },
    {
      author : "Warren Buffett",
      quote :
          "Rule No. 1: Never lose money. \nRule No. 2: Never forget rule No. 1."
    },
    {
      author : "Warren Buffett",
      quote : "Price is what you pay. Value is what you get."
    },
    {
      author : "Warren Buffett",
      quote :
          "It takes 20 years to build a reputation and five minutes to ruin it."
    },
    {
      author : "Warren Buffett",
      quote :
          "Chains of habit are too light to be felt until they are too heavy to be broken."
    },
    {
      author : "Warren Buffett",
      quote : "A public-opinion poll is no substitute for thought."
    },
    {
      author : "Warren Buffett",
      quote : "The only way to get love is to be lovable."
    },
    {
      author : "Warren Buffett",
      quote : "Predicting rain doesn't count. Building arks does."
    },
    {
      author : "Warren Buffett",
      quote :
          "The most important thing to do if you find yourself in a hole is to stop digging."
    },
    {
      author : "Warren Buffett",
      quote :
          "Some things just take time. You can't produce a baby in one month by getting nine women pregnant."
    },
    {
      author : "Warren Buffett",
      quote : "You never know who's swimming naked until the tide goes out."
    },
    {
      author : "Richard Branson",
      quote :
          "You don't learn to walk by following rules. You learn by doing, and by falling over."
    },
    {
      author : "Richard Branson",
      quote :
          "A business is simply an idea to make other people's lives better."
    },
    {
      author : "Richard Branson",
      quote : "I've seen life as one long learning process."
    },
    {
      author : "Richard Branson",
      quote :
          "A business has to be involving, it has to be fun, and it has to exercise your creative instincts."
    },
    {
      author : "Richard Branson",
      quote :
          "Business opportunities are like buses. There's always another one coming."
    },
    {
      author : "Richard Branson",
      quote :
          "I believe in benevolent dictatorship, provided I am the dictator."
    },
    {
      author : "Richard Branson",
      quote : "The best way of learning about anything is by doing."
    },
    {
      author : "Richard Branson",
      quote :
          "Don't think \"what's the cheapest way to do it\" or \"what's the fastest way to do it\"...think \"what's the most amazing way to do it?\""
    },
    {
      author : "Richard Branson",
      quote :
          "Engage your emotions at work. Your instincts and emotions are there to help you."
    },
    {
      author : "Richard Branson",
      quote :
          "Entrepreneurship is about turning what excites you in life into capital, so that you can do more of it and move forward with it."
    },
    {
      author : "Richard Branson",
      quote : "You've got to question leaders on occasion."
    },
    {
      author : "Richard Branson",
      quote : "Listen. Take the best. Leave the rest."
    },
    {
      author : "Richard Branson",
      quote :
          "The time to go into a new business is when it's badly run by others."
    },
    {
      author : "Richard Branson",
      quote : "If you look for the best in your employees, they'll flourish."
    },
    {
      author : "Richard Branson",
      quote : "I don't think of work as work and play as play. It's all living."
    },
    {
      author : "Richard Branson",
      quote :
          "My general attitude to life is to enjoy every minute of every day."
    },
    {
      author : "Richard Branson",
      quote :
          "Do not be embarrassed by your failures. Learn from them and start again."
    },
  ];

  function quoteGenerate() {
    let quoteRandomize = Math.floor(Math.random() * quoteList.length),
        quoteMain = quoteList[quoteRandomize].quote,
        quoteAuthor = quoteList[quoteRandomize].author;
        $(".text").fadeOut("1000").fadeIn("3000").text(quoteMain);
        $(".author").fadeOut("1000").fadeIn("3000").text(quoteAuthor);
  }
  $(".tweet").on("click", function() {
    window.open("https://twitter.com/home/?status=" +
                    "\"" + $(".text").text() + "\"" +
                    " - " + $(".author").text() + "Tweet by A-Quote",
                '_blank');
  });

  $(".a-button").on("click", function() { quoteGenerate(); });
  quoteGenerate();
});
