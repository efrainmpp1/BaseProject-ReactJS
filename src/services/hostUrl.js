const server = window.location.hostname
const PORT = 3333

const hostUrl =
  server === 'server_name'
    ? `http://server_name:${PORT}`
    : `http://${server}:${PORT}`

export default hostUrl
