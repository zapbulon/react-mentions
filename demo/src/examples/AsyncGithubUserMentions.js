import React from 'react'

import { MentionsInput, Mention } from '../../../src'

import defaultStyle from './defaultStyle'
import defaultMentionStyle from './defaultMentionStyle'

function fetchUsers(query, callback) {
  if (!query) return
  fetch(`https://api.github.com/search/users?q=${query}`, { json: true })
    .then(res => res.json())

    // Transform the users to what react-mentions expects
    .then(res =>
      res.items.map(user => ({ display: user.login, id: user.login }))
    )
    .then(callback)
}

export default function AsyncGithubUserMentions({ value, data, onChange }) {
  return (
    <div className="async">
      <h3>Async Github user mentions</h3>

      <MentionsInput
        value={value}
        onChange={onChange}
        style={defaultStyle}
        placeholder="Mention any Github user by typing `@` followed by at least one char"
        a11ySuggestionsListLabel={"Suggested Github users for mention"}
      >
        <Mention
          displayTransform={login => `@${login}`}
          trigger="@"
          data={fetchUsers}
          style={defaultMentionStyle}
        />
      </MentionsInput>
    </div>
  )
}
