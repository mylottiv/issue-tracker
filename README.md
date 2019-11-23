# issue-tracker
Real-time issue and bug tracking wrapper for Javascript.

## Plan of Attack
1. Start with a code window that reads in the contents of a JS file
    1. The file being read for these initial steps will be the source file of the app
    2. So where is this being hosted then exactly? Just inside a server
        - Use case is so you can run the tracker when you're debugging locally, OR if you somehow have live access to your root directory on your server
        - But then should the "live" aspect just be simulated by a dev live server like nodemon?
            - This should probably be a wrapper of nodemon, when you run dev, you run this script, that then also runs nodemon
                1. "dev": "npm run track && npm run start"
                2. "track": "nodemon tracker.js"
                3. "start": "nodemon server.js"
            - The issue is less getting a live server to work, nodemon makes that easy, the question is more whether that's neccessary functionality in final product.
                - Long run I probably will set up a socket listener, if you're working live with the server, you don't want the server resetting as you edit the code, you just want the bug tracker staying up to date.
                - Long run I'm basically writing git hub lmao
    3. Have a server shell to deliver a client view that (for now) just rerenders every time there's a file change.
        1. So this is where we get into tracking changes. In fact, I should probably just be logging everything from the very beginning
            - "Everything" meaning every line addition, edit, or deletion.
        2. Tracker will take the new file, parse it, compare it to the old file, and modify its stored version of the file to accommodate
            - This is where sql would come in handy. Or MongoDB?
            - Basically the actual file will change each time, but the persistent storage of the "file" fostered by the tracking app will only update according to specified rules.
            - Honestly because of the relations, sql might be best