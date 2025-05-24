# The-Fun-Site

Life has had all of the fun sapped out of it. The playplaces are gone. The unicorn drinks are gone. The fun buildings are gone, and I can't do anything about it. At the very least, however, I can make a fun website, just like the good-ol' days of the web.

This is an early build of the site. It is the basic Nuxt/Vue components I made to set the groundwork for the site. The end goal is to add a Node/Express API for a MongoDB database. The expected backend is planned to be an MVC structure with the models being created such that they can be created for and collected from Mongo easily.

Version Alpha 0.0.2 (05/24/2025)

Build notes:

Additions:

- Fixed the layouts
- Default layout is now working

Notes:

- The error "Cannot find module '\_nuxt\layouts_default_vue.mjs'" could not be resolved. Even fixing paths, there was just no layouts_default_vue.mjs to find. Recreating the project both normally and via WSL Linux did not fix this issue.
- Switching from Webpack to Vite as the builder fixed the problem. The pages now change properly and the header actually loads as a layout. This means the problem was likely Webpack-related.
- Changing webpack versions both in @nuxt/webpack-builder and webpack did not fix the issue.
- Vite was decided to be the current builder on its own due to this issue. The layout makes it so it can switch pages now and scoped styles are now being shown for some reason, so functionality is maintained by doing so.
- This is to continued for now for development purposes, but may need to be changed in the future since Vite building is very slow.
	- Note about first build:
		- Slow module @nuxt/devtools took 5656.22ms to setup.
	- Times for second build (thus reducing the effect of the slow module):
		- Vite client built in 140ms                                                                               3:01:24 PM
		- Vite server built in 3430ms                                                                              3:01:28 PM
		- Nuxt Nitro server built in 10562ms                                                                 nitro 3:01:41 PM
		- Vite client warmed up in 106ms                                                                           3:01:41 PM
		- Vite server warmed up in 8500ms                                                                          3:01:49 PM

Version Alpha 0.0.1 (05/22/2025)

Build notes:

Additions:

- The Vue/Nuxt frontend framework.
- A basic UI to verify scoped CSS entities.
- A second Farm page to verify page traversal.

Notes:

- Default layouts (or layouts in general) crash the system when implemented, so the navbar is currently a NavBar element added to each of the pages to test functionality.
- The original conecpt moved from Vue alone to Nuxt to get an idea of Vue capabilities before going into Nuxt. As such, there are remnants of the Vue-only version currently left in the code. This is for reference.
- Webpack has to be used for style scoped elements to function. Using the default builder makes it fail.
- The idea is to focus on Javascript over Typescript. While objects like nuxt.config are currently Typescript due to the requirements of the library, Javascript is being used where possible.
