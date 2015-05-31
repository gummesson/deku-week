/**
 * Dependencies
 */

import { dom, tree, render } from 'deku'
import Week from './week'

/**
 * App
 */

const App = tree(dom(Week))

render(App, document.querySelector('[role="app"]'))
