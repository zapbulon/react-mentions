import React from 'react'
import useStyles from 'substyle'

export const DEFAULT_MENTION_PROPS = {
  trigger: '@',
  markup: '@[__display__](__id__)',
  displayTransform: function(id, display) {
    return display || id || ''
  },
  onAdd: () => null,
  onRemove: () => null,
  renderSuggestion: null,
  isLoading: false,
  appendSpaceOnAdd: false,
}

const defaultStyle = {
  fontWeight: 'inherit',
}

export default function Mention({
  display,
  style,
  className,
  classNames,
  trigger = DEFAULT_MENTION_PROPS.trigger,
  markup = DEFAULT_MENTION_PROPS.markup,
  displayTransform = DEFAULT_MENTION_PROPS.displayTransform,
  onAdd = DEFAULT_MENTION_PROPS.onAdd,
  onRemove = DEFAULT_MENTION_PROPS.onRemove,
  renderSuggestion = DEFAULT_MENTION_PROPS.renderSuggestion,
  isLoading = DEFAULT_MENTION_PROPS.isLoading,
  appendSpaceOnAdd = DEFAULT_MENTION_PROPS.appendSpaceOnAdd,
}) {
  const styles = useStyles(defaultStyle, { style, className, classNames })
  return <strong {...styles}>{display}</strong>
}
