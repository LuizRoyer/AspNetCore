import { ChangeEvent, useState } from "react"
import { Button } from "./componets/Button"
import Tweet from "./componets/Tweet"

function App() {

  const [tweets, setTweets] = useState<string[]>([
    'texto 1', 'texto 2', 'texto 3'
  ])

  const [newTweet, setNewTweet] = useState<string>('')


  function createTweet() {
    setTweets([...tweets, newTweet])
    setNewTweet('')
  }

  function changeField(event: ChangeEvent<HTMLInputElement>) {
    // pega o imput do campo e coloca no parametro newTweet    
    setNewTweet(event.target.value)
  }



  return (
    <div>

      <ul>
        {tweets.map(tweet => {
          return <ol key={tweet}><Tweet text={tweet} /></ol>
        })}
      </ul>


      <input style={{
        backgroundColor: "beige"
      }}
        onChange={changeField} value={newTweet} />

        
      <Button onclick={createTweet} text="Add Tweet" />

    </div>
  )
}

export default App
