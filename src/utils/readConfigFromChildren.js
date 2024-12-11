import { Children } from 'react'
import invariant from 'invariant'
import markupToRegex from './markupToRegex'
import countPlaceholders from './countPlaceholders'
import { DEFAULT_MENTION_PROPS } from '../Mention'

const readConfigFromChildren = children => {
  const config = Children.toArray(children)
    .filter(c => !!c && c.props != [undefined])
    .map(
    ({
      props: {
        markup = DEFAULT_MENTION_PROPS.markup,
        regex = DEFAULT_MENTION_PROPS.regex,
        displayTransform = DEFAULT_MENTION_PROPS.displayTransform
      }
    }) => ({
      ...DEFAULT_MENTION_PROPS,
      markup: markup,
      displayTransform: displayTransform,
      regex: regex
        ? coerceCapturingGroups(regex, markup)
        : markupToRegex(markup),
    })
  );

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
