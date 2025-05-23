# The-Fun-Site

Life has had all of the fun sapped out of it. The playplaces are gone. The unicorn drinks are gone. The fun buildings are gone, and I can't do anything about it. At the very least, however, I can make a fun website, just like the good-ol' days of the web.

This is an early build of the site. It is the basic Nuxt/Vue components I made to set the groundwork for the site. The end goal is to add a Node/Express API for a MongoDB database. The expected backend is planned to be an MVC structure with the models being created such that they can be created for and collected from Mongo easily.

Version Alpha 0.0.1 (05/22/2025)

Build notes:

Additions:

- The Vue/Nuxt frontend framework.
- A basic UI to verify scoped CSS entities.
- A second Farm page to verify page traversal.

Notes:

- Default layouts (or layouts in general) crash the system when implemented, so the navbar is currently a NavBar element added to each of the pages to test functionality.
- The original conecpt moved from Vue alone to Nuxt to get an idea of Vue capabilities before going into Nuxt. As such, there are remnants of the Vue-only version currently left in the code. This is for reference.
- Webpack has to be used for <style scoped> elements to function. Using the default builder makes it fail.
- The idea is to focus on Javascript over Typescript. While objects like nuxt.config are currently Typescript due to the requirements of the library, Javascript is being used where possible.
