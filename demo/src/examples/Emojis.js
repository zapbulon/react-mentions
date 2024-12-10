import React, { useEffect, useState } from 'react'

import { Mention, MentionsInput } from '../../../src'

import emojiExampleStyle from './emojiExampleStyle'
import defaultMentionStyle from './defaultMentionStyle'

const neverMatchingRegex = /($a)/

export default function Emojis({ value, data, onChange, onAdd }) {
  const [emojis, setEmojis] = useState([])

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/oliveratgithub/0bf11a9aff0d6da7b46f1490f86a71eb/raw/d8e4b78cfe66862cf3809443c1dba017f37b61db/emojis.json'
    )
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        setEmojis(jsonData.emojis)
      })
  }, [])

  const queryEmojis = (query, callback) => {
    if (query.length === 0) return

    const matches = emojis
      .filter((emoji) => {
        return emoji.name.indexOf(query.toLowerCase()) > -1
      })
      .slice(0, 10)
    return matches.map(({ emoji }) => ({ id: emoji }))
  }

  return (
    <div>
      <h3>Emoji support</h3>

      <MentionsInput
        value={value}
        onChange={onChange}
        style={emojiExampleStyle}
        placeholder={"Press ':' for emojis, mention people using '@'"}
      >
        <Mention
          trigger="@"
          displayTransform={(username) => `@${username}`}
          markup="@__id__"
          data={data}
          regex={/@(\S+)/}
          style={defaultMentionStyle}
          appendSpaceOnAdd
        />
        <Mention
          trigger=":"
          markup="__id__"
          regex={neverMatchingRegex}
          data={queryEmojis}
        />
      </MentionsInput>
    </div>
  )
}
