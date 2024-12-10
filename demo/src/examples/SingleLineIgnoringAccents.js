import React from 'react'

import { Mention, MentionsInput } from '../../../src'

import defaultStyle from './defaultStyle'
import defaultMentionStyle from './defaultMentionStyle'

export default function SingleLineIgnoringAccents({ value, data, onChange, onAdd }) {
  return (
    <div className="single-line">
      <h3>Single line input ignoring character accents</h3>

      <MentionsInput
        singleLine
        value={value}
        onChange={onChange}
        style={defaultStyle}
        placeholder={"Mention people using '@'"}
        ignoreAccents
        a11ySuggestionsListLabel={"Suggested mentions"}
      >
        <Mention data={data} onAdd={onAdd} style={defaultMentionStyle} />
      </MentionsInput>
    </div>
  )
}
