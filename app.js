import http from 'http';
import url from 'url';







  let server = http.createServer((request, res) => {

    if (parsedUrl.path === '/') {
      res.write('<p> On the Root Page </p>')
    }

    else if {
      res.write("<p> Not on the Root Page </p>")
      res.end();
      console.log(res);
    }

  };


  /**
   * Let's create a simple webserver that returns a different
   * message based on what URL they ask for.
   *
   * 1. parsedUrl.path contains the path the user is requesting.
   *    Setup an if statement to check if they're looking at /
   *
   *    If they are, use req.write() to send them a message
   *    explaining that they're on the root page.
   *
   * 2. If they're looking at /other then use req.write() to
   *    send a message explaining that they're on the other page.
   *
   * 3. Remember to use req.end() after you're done using req.write()
   *    so that you actually send a response to the browser.
   *
   * 4. You should be able to run npm run app and visit localhost:8000
   *    in your browser. At /, you should see the / message. At /other,
   *    you should see the other message.
   */

});

server.listen(8000);
