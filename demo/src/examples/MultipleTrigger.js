import React from 'react'

import { Mention, MentionsInput } from '../../../src'

import defaultStyle from './defaultStyle'
import defaultMentionStyle from './defaultMentionStyle'

// use first/outer capture group to extract the full entered sequence to be replaced
// and second/inner capture group to extract search string from the match
const emailRegex = /(([^\s@]+@[^\s@]+\.[^\s@]+))$/

export default function MultipleTriggers({ value, data, onChange, onAdd }) {
  return (
    <div className="multiple-triggers">
      <h3>Multiple trigger patterns</h3>
      <p>Mention people using '@' + username or type an email address</p>

      <MentionsInput
        value={value}
        onChange={onChange}
        style={defaultStyle}
        placeholder={"Mention people using '@'"}
        a11ySuggestionsListLabel={"Suggested mentions"}
      >
        <Mention
          markup="@[__display__](user:__id__)"
          trigger="@"
          data={data}
          renderSuggestion={(
            suggestion,
            search,
            highlightedDisplay,
            index,
            focused
          ) => (
            <div className={`user ${focused ? 'focused' : ''}`}>
              {highlightedDisplay}
            </div>
          )}
          onAdd={onAdd}
          style={defaultMentionStyle}
        />

        <Mention
          markup="@[__display__](email:__id__)"
          trigger={emailRegex}
          data={(search) => [{ id: search, display: search }]}
          onAdd={onAdd}
          style={{ backgroundColor: '#d1c4e9' }}
        />
      </MentionsInput>
    </div>
  )
}
