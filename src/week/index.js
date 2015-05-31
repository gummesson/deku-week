/**
 * Dependencies
 */

import { dom } from 'deku'
import WeekTitle from './title'
import WeekNumber from './number'
import WeekMeta from './meta'

/**
 * Component
 */

function render() {
  return dom('section', { class: 'week' }, [
    dom(WeekTitle),
    dom(WeekNumber),
    dom(WeekMeta)
  ])
}

/**
 * Exports
 */

export default { render }
