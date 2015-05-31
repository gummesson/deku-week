/**
 * Dependencies
 */

import { dom } from 'deku'

/**
 * Component
 */

function render() {
  return dom('p', { class: 'week__meta' }, [
    dom('a', { href: 'https://github.com/gummesson/deku-week' }, [
      'Source on GitHub'
    ])
  ])
}

/**
 * Exports
 */

export default { render }
