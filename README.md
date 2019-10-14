run the server: `python server.py`
import the client: `import { wslog } from './client.js';`
use the client: `wslog('any number or type of args', 1, 2, 3);`
tell the client where to connect with query parameter `wslog_hostname`; default is `location.window.hostname`
