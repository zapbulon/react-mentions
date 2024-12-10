import React from 'react'

import { MentionsInput, Mention } from '../../../src'

import classNames from './example.module.css'

export default function CssModules({ value, data, onChange }) {
  return (
    <div className="advanced">
      <h3>Styling with css modules</h3>

      <MentionsInput
        value={value}
        onChange={onChange}
        className="mentions"
        classNames={classNames}
        a11ySuggestionsListLabel={"Suggested mentions"}
      >
        <Mention data={data} className={classNames.mentions__mention} />
      </MentionsInput>
    </div>
  )
}
