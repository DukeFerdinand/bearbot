const jokes = [
  {
    "question": "What do you call a bear with no teeth?",
    "answer": "A gummy bear!"
  },
  {
    "question": "What do you call a bear with no ears?",
    "answer": "B"
  },
  {
    "question": "What did the teddy bear say after dinner?",
    "answer": "I'm stuffed!"
  },
  {
    "question": "What's white, furry, and shaped like a tooth?",
    "answer": "A molar bear!"
  },
  {
    "question": "How do grizzly bears stay cool in the summer?",
    "answer": "They use bear conditioning!"
  },
  {
    "question": "Why did the bear quit his job?",
    "answer": "It was pure panda-monium!"
  },
  {
    "question": "What did the panda take in her suitcase?",
    "answer": "Just the bear necessities!"
  },
  {
    "question": "What's a bears favorite pie?",
    "answer": "Blue-beary pie!"
  },
  {
    "question": "How does a bear catch a fish?",
    "answer": "They use their bear hands!"
  },
  {
    "question": "Why do bears have hairy coats?",
    "answer": "Fur protection!"
  },
  {
    "question": "What do bears like to eat for breakfast?",
    "answer": "Breakfast bear-ritos!"
  },
  {
    "question": "What kind of car does a bear drive?",
    "answer": "A fur-rari!"
  },
  {
    "question": "How did the bear walk in the snow?",
    "answer": "Bear-footed!"
  },
  {
    "question": "Did you hear about the grizzly who dyed their fur?",
    "answer": "They were bear-ly recognizable!"
  },
  {
    "question": "Why did the panda shop at the flea market?",
    "answer": "Because they wanted the best bear-gains!"
  },
  {
    "question": "How did the bear stop the movie?",
    "answer": "He hit the paws button!"
  },
  {
    "question": "What's a bears favorite scary movie?",
    "answer": "The Bear Witch Project!"
  },
  {
    "question": "What did one bear say to the other?",
    "answer": "You're beary beary cute!"
  },
  {
    "question": "Why did the bear stay inside?",
    "answer": "It's bear-y cold out there!"
  },
  {
    "question": "Why did the bear not get the job at the hair salon?",
    "answer": "Because they weren't koala-fied!"
  },
  {
    "question": "What can a bear break just by growling?",
    "answer": "The sound bear-rier!"
  },
  {
    "question": "What did the bear say to the other bear on their wedding day?",
    "answer": "I can't wait to growl old with you!"
  },
  {
    "question": "What did the bear say before going to Legoland?",
    "answer": "I can bear-ly wait!"
  },
  {
    "question": "Why did the bear quit their second job?",
    "answer": "They needed some koala-ty time with their family!"
  }
]

export function getBearJoke() {
  // get a random joke from the array, including the last one
  return jokes[Math.floor(Math.random() * jokes.length)]
}