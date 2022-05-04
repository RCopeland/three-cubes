# Three Cubes

A tiny project to learn about threejs, react-three-fiber, and react-spring.

## How does it work?
There's a Three Scene set up, and a Box component that's built from Three's BoxGeometry and basic material. I turned on the 
wireframe mode because I thought it looked neat. React spring is attached to the mesh and when a box is clicked, it becomes active, 
triggering the animation.

## Why is it glowing?
I added some post-processing to the scene, specifically a Bloom filter, using @react-three/postprocessing.
It would be fun to somehow vary the surface of the boxes (without the wireframe), so that the Bloom filter 
would have a more varied effect.

