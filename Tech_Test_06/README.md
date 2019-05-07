# Image similarity

When a user posts on The App, we might assume that they would be interested in
posts similar to theirs, or at least referring to similar content. One way to do
this might be to find other posts with similar images to theirs.

We have made 20 plant images available in the images directory. We have also
provided a dataset of labels from the Google Cloud Vision API for those images
(see `data.json`), which could help, although its use is not a requirement.

### The task

If I were to post any one of the 20 images, which of the other 19 would be
relevant to show to me as "other posts like yours"?

Come up with some ideas about how this could be achieved, and be prepared to talk
through some potential solutions with other engineers. If you would like to write
code to demonstrate your intended approach, or as a starting point for a conversation
please do.

### Guidance

This assignment is deliberately open-ended, and is intended to help us discover your
areas of interest and areas of expertise. If databases are your thing, maybe your
solution will revolve around efficient querying. If you're into functional programming,
some point-free representation of an algorithm might be suitable.

There is certainly no right or wrong answer to this. Yours may not be the most efficient
or scalable solution, but you should understand its strengths and weaknesses and be
prepared to talk through these kinds of things.
