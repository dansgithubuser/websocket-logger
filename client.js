const params = new URLSearchParams(window.location.search);
const hostname = params.get('wslog_hostname') || window.location.hostname;
const socket = new WebSocket(`ws://${hostname}:9111`);

export function wslog() {
  socket.send(Array.from(arguments).map(i => JSON.stringify(i)).join(' '));
}
