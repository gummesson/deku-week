/**
 * Dependencies
 */

const fs          = require('fs')
const path        = require('path')
const http        = require('http')
const brickRouter = require('brick-router')
const brickServer = require('brick-server')
const browserify  = require('browserify')
const cssnext     = require('cssnext')
const htmlmin     = require('html-minifier').minify
const summary     = require('server-summary')
const minimist    = require('minimist')

const argv = minimist(process.argv.slice(2), {
  boolean: ['server', 'static']
})

/**
 * Routes
 */

const router = brickRouter()
const source = path.join(__dirname, 'src')
const bundle = browserify({
  entries: [
    path.join(source, 'index.js')
  ]
})

router.on('/index.js', function(done) {
  const js = bundle
  .transform('babelify')
  .transform('uglifyify', {
    global: true,
    sourcemap: false,
    compress: true,
    mangle: true
  })
  .bundle()
  done(null, js)
})

router.on('/index.css', function(done) {
  const file = path.join(source, 'index.css')
  fs.readFile(file, 'utf8', function(err, data) {
    if (err) return done(err)
    const css = cssnext(data, {
      compress: true,
      features: { rem: false }
    })
    done(null, css)
  })
})

router.on('/index.html', function(done) {
  const file = path.join(source, 'index.html')
  fs.readFile(file, 'utf8', function(err, data) {
    if (err) return done(err)
    const html = htmlmin(data, {
      collapseWhitespace: true
    })
    done(null, html)
  })
})

router.on('/favicon.png', function(done) {
  const file = path.join(source, 'favicon.png')
  const icon = fs.createReadStream(file)
  done(null, icon)
})

/**
 * Server
 */

if (argv.server) {
  const handler = brickServer(router)
  const server  = http.createServer(handler)
  server.listen(process.env.PORT || 1337, summary)
}

/**
 * Static
 */

if (argv.static) {
  const www = path.join(__dirname, 'www')
  router.build(www, function(err) {
    if (err) {
      console.log('error:', err)
      process.exit(1)
    }
  })
}
