import './App.css'
import Joke from './components/Joke.jsx'

export default function App() {

  return (
    <>
      <section className="Card">
        <Joke 
          setup="What's the soft stuff between sharks' teeth?"
          punchline="- Slow swimmers"
        />

        <Joke 
          setup="What do you call fake spaghetti?"
          punchline="- An impasta!"
        />

        <Joke 
          setup="Why did the chicken coop only have two doors?"
          punchline="- If it had four doors, it'd be a sedan."
        />

        <Joke 
          setup="What is Peter Pan's favourite place to eat out?"
          punchline="- Wendy's!"
        />

        <Joke 
          setup="You've gotta really hand it to blind prostitutes."
        />
        

      </section>
    </>
  )
}


