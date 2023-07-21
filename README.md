# Andrea Caputo | Personal Portfolio

Welcome to the first version of my personal portfolio!
I’m an aspiring web developer who has a design background.
My website is simple, with a sleek, modern minimalistic look. I use it to showcase some of my best design projects, and I plan to use it to host my future WebDev endeavors.

https://andr3cpt.github.io/portfolio/

### Tech stack

The website is fully responsive and built with a mobile-first approach.
I’ve built it in Vanilla JavaScript, with the use of the Sass preprocessor to create some useful variables and to style each component on a different stylesheet, and then import them all on one main stylesheet.
There’s extensive use of latest CSS features, such as Flexbox.
In the “Contact” section, I implemented the functionality of the contact form through EmailJS, a popular external lightweight JS library.

### Micro-animations

The fluctuating little elements (found both on the homepage and on the contact page) are aimed at making the site feel a bit more “alive” and modern. 
I’ve obtained with a simple <code>@keyframes</code> animation, native to CSS, applied to all the elements but set with a different animation-duration, to give it asynchronicity.

## Additional code facts

### EmailJS logic

Message status: based on the outcome of sending the messages via the form, the page will show a <code>div</code> that will slide in and out in a 5-second timespan.

### Navbar

The menu is visibile only when the viewport has a <code>width</code> that’s inferior to a certain set value. The interactivity was implemented with a simple <code>eventListener</code> which adds/removes the <code>open-nav</code> utility class.


