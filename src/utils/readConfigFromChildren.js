import { Children } from 'react'
import invariant from 'invariant'
import markupToRegex from './markupToRegex'
import countPlaceholders from './countPlaceholders'

const readConfigFromChildren = children => {
  const config = Children.toArray(children).map(
    ({ props: { markup, regex, displayTransform } }) => ({
      markup,
      regex: regex
        ? coerceCapturingGroups(regex, markup)
        : markupToRegex(markup),
      displayTransform: displayTransform || ((id, display) => display || id),
    })
  );

  console.log('-----------------------')
  console.log(children)
  console.log( Children.toArray(children))
  console.log(config)

  return config;
}

// make sure that the custom regex defines the correct number of capturing groups
const coerceCapturingGroups = (regex, markup) => {
  const numberOfGroups = new RegExp(regex.toString() + '|').exec('').length - 1
  const numberOfPlaceholders = countPlaceholders(markup)

  invariant(
    numberOfGroups === numberOfPlaceholders,
    `Number of capturing groups in RegExp ${regex.toString()} (${numberOfGroups}) does not match the number of placeholders in the markup '${markup}' (${numberOfPlaceholders})`
  )

  return regex
}

export default readConfigFromChildren
