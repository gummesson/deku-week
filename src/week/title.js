/**
 * Dependencies
 */

import { dom } from 'deku'

/**
 * Component
 */

function render() {
  return dom('h1', { class: 'week__title' }, [
    'Week'
  ])
}

/**
 * Exports
 */

export default { render }
