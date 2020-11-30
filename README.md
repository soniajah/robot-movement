# robot-movement
A simple application for a robot movement in 2D space.

arguments required:
- room dimension: x > 0 , y > 0
- start position: x >= 0 , y >= 0, direction (North,East,South,West)
- instructions: example "RFRFFR" // L: turn left, R: turn right, F: move forward

# instructions to run

## to run the server:
- cd server
- npm i
- npm start

## to run the client
- cd client
- npm i
- npm run serve

## run unit test
- cd server
- npm run test

# tech stack
Node.js, express, Vue, html, css, jest