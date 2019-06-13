We’d like you to implement an application that will find the shortest routes between two points, given the points and distances between them. Below is a table of routes and their distances. Each route can be travelled in either direction:

|Route End 1|Route End 2|Distance|
|---|---|---|
|A|C|2|
|C|D|1|
|C|F|4|
|B|D|4|
|B|E|7|
|D|F|1|
|D|G|2|
|F|G|3|
|G|H|4|
|E|H|10|

As an example, to get from B to H there are a number of routes (below list is not exhaustive):

* B, E, H
* B, D, G, H
* B, D, C, F, G, H

And so on… 

The application should return the shortest route in terms of distance travelled, not how many hops were made. In the example above, the shortest route is B, D, G, H – which gives a distance of 10. There is a route with fewer hops, B, E, H, but it has a greater distance of 17 which means that is not the shortest route. 

You have a choice of technologies you can chose between to implement this in. Use either TypeScript (JS only as a fall back), preferably as a react app (using CRA is fine – please don’t worry about UI here, it’s the workings we’re interested in) or a C# .net core Console App. The implementation should be appropriate to this size of problem – it doesn’t need to represent enterprise scale infrastructure. We’re looking for well designed, nice clean and tidy code as well as clean software designs. We’re also looking for an awareness of complexity and scenarios you might consider (in terms of the functionality you’re attempting to deliver) – what problems might exist etc…

Please ensure you include appropriate unit tests.

As we appreciate peoples time is both valuable and precious we don’t want you to feel you need to go overboard on this. As a time saver it’s appropriate to show some thinking in terms of comments or an accompanying readme.txt to explain any short fallings or holes you know you left open – for example not guarding against parameter values on entry to a function/method. However we wouldn’t recommend using this too heavily; it won’t be enough to submit a poor design coupled with a note saying ‘this is a poor design’ – that wouldn’t best represent your skills. 

Note: This task is intended to be fairly challenging. Don’t worry if you’re not able to submit a fully working application. We’re interested in approach as well as completeness for the range of roles we’re looking to fill. 
