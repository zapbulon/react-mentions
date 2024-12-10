import React from 'react'
import { merge } from '../../../src/utils'
import { Mention, MentionsInput } from '../../../src'

import defaultStyle from './defaultStyle'
import defaultMentionStyle from './defaultMentionStyle'

export default function Scrollable({ value, data, onChange, onAdd }) {
  let style = merge({}, defaultStyle, {
    input: {
      overflow: 'auto',
      height: 70,
    },
    highlighter: {
      boxSizing: 'border-box',
      overflow: 'hidden',
      height: 70,
    },
  })

  return (
    <div className="scrollable">
      <h3>Scrollable container</h3>
      <p>
        The highlighter will mimic the scroll of the textarea thus making
        everything aligned.
      </p>

      <MentionsInput
        value={value}
        onChange={onChange}
        style={style}
        placeholder={"Mention people using '@'"}
        a11ySuggestionsListLabel={'Suggested mentions'}
      >
        <Mention
          markup="@[__display__](user:__id__)"
          displayTransform={(url) => `@${url}`}
          trigger="@"
          data={data}
          renderSuggestion={(suggestion, search, highlightedDisplay) => (
            <div className="user">{highlightedDisplay}</div>
          )}
          onAdd={onAdd}
          style={defaultMentionStyle}
        />
      </MentionsInput>
    </div>
  )
}
