const params = new URLSearchParams(window.location.search);
const host = params.get('wslog_host') || 'localhost';
const gSocket = new WebSocket(`ws://${host}:9111`);

export function wslog() {
  gSocket.send(Array.from(arguments).map(i => JSON.stringify(i)).join(' '));
}
