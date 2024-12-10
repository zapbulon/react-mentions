import React from 'react'
import PropTypes from 'prop-types'
import useStyles from 'substyle'

const defaultStyle = {
  fontWeight: 'inherit',
}

export default function Mention({
  display,
  style,
  className,
  classNames,
  trigger = '@',
  markup = '@[__display__](__id__)',
  displayTransform = function(id, display) {
    return display || id
  },
  onAdd = () => null,
  onRemove = () => null,
  renderSuggestion = null,
  isLoading = false,
  appendSpaceOnAdd = false,
}) {
  const styles = useStyles(defaultStyle, { style, className, classNames })
  return <strong {...styles}>{display}</strong>
}
