import { html } from 'hono/html'

// Anything you put in the body tag here is never re-loaded, so if you need to add a nav, header or footer with data that may change, you should put this in a sub-layout component e.g. main.js
const AppLayout = (props) => html`
<html>
<head>
  <meta charset="UTF-8">
  <title>${props.title}</title>
  <meta name="description" content="${props.description}">
  <script src="/htmx.min.js"></script>
  <script src="/idiomorph-ext.min.js"></script>
  <script src="/alpine.min.js"></script>
  <link rel="stylesheet" href="/app.css">
</head>
<body id="body" hx-boost="true" class="bg-gray-50 antialiased">
  ${props.children}
</body>
</html>
`

export default AppLayout
