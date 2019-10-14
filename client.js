const enabled = 1;

var wslog = () => {};

if (enabled) {
  const params = new URLSearchParams(window.location.search);
  const hostname = params.get('wslog_hostname') || window.location.hostname;
  const socket = new WebSocket(`ws://${hostname}:9111`);
  wslog = function() {
    socket.send(Array.from(arguments).map(i => JSON.stringify(i)).join(' '));
  }
}

export { wslog };
