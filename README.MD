TS Express Dependency Management
====

### What you'll find in this project:
1. Poor man's dependency injection technique using object de-structuring 
2. Declarative routing objects for Express
3. Easy error handling for async controller functions

#### Poor man's dependency injection
This project demonstrates the usage of partial application to perform DI in TypeScript

Any function that requires a service from 'the container' must be constructed
via partial application. The outer 'factory' function de-structures an object into the
required dependencies _(might as well be an IOC container)_

#### Declarative routing objects for express
 A simple mapping function allows us to transform a declarative route object 
 (like you'd see in HapiJS) into a native express route.
 
 ```typescript
let router = express.Router()

// regular express route
router.post('/ping', (_, res) => res.send('pong'))

// a routing object
let pingRoute = {
    method: 'get',
    path: '/ping',
    controller: ({ request }) => 'pong'
}
addRoute(router, pingRoute)

// ...or both!
```
 
...But that's nothing special. 
 
How about reducing redundant code in your controllers?

##### Eliminating redundancy:
It's all too common to see controllers that look like this..
```typescript
app.post('/register', (req, res) => {
    if(!req.body.name) return res.status(400).json({ msg: 'please provide your name' })
    if(!req.body.email) return res.status(400).json({ msg: 'please provide an email' })
    if(!req.body.password || !req.body.password.length > 5) 
        return res.status(400).json({ msg: 'invalid password' })
        
    try {
        // save the user...
        let newUser = await saveUser(req.body)
        return res.json({ msg: 'successfully registered!' })
    } catch (err) {
        return res.status(500).json({ msg: 'Something went wrong :(' })
    }
})
```

You see the same steps taken in _every controller_

1. Pull the params from request object
2. Do some validation
3. Run the business logic in a try-catch
4. Format a success response
5. ...or handle an async exception, and format an error response

This makes them difficult to test in isolation.

##### No more async try-catch
When mapping the route object, the function wraps it in an async error handler, so you
only have to return an object, not write to the response, or use a try-catch block.

##### It's totally optional
The route object separates these concerns, and then smooshes them back together for Express
 
