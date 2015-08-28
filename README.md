#Server
It starts server on port 4000. GET to '/' will response with 'ok' in 5 minutes.

#Client
Send request to server but fails after 2 minutes with
<code>Error: socket hang up.</code>

#ClientApp
C# projct using HttpWebRequest. Fails after 4 minutes. With
<code>The underlying connection was closed: The connection was closed unexpectedly.</code>
