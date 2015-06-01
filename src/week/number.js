/**
 * Dependencies
 */

import { dom } from 'deku'
import isoWeek from 'iso-week'

/**
 * Component
 */

function initialState() {
  return {
    week: '...'
  }
}

function render({ state }) {
  return dom('p', { class: 'week__number' }, [
    state.week
  ])
}

function afterMount(c, e, setState) {
  setState({
    week: isoWeek()
  })
}

/**
 * Exports
 */

export default { initialState, render, afterMount }
