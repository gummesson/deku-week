/**
 * Dependencies
 */

import { dom } from 'deku'
import isoWeek from 'iso-week'

/**
 * Component
 */

function render() {
  return dom('p', { class: 'week__number' }, [
    isoWeek()
  ])
}

/**
 * Exports
 */

export default { render }
