# vinyl cutter and snap fit joint

## vinyl cutter notes

### using `mods` and the vinyl cutter
- **preparing your image.** want the background to be white; there is an invert function in `mods` that can help you do that
- **things that make your image hard to transfer.** the vinyl cutter can cut pretty much any shape. the problem comes when you want to stick that vinyl cut design onto some surface (the transfer). **small features, thin lines, and intersecting thin lines** are particularly painful (they tend to not stick to your desired surface, and/or tear when you are trying to peel back the transfer paper - see below). a trick is to use the tweezers to push the details down before lifting the transfer paper up.
- **sending your file to the printer.** see the button `waiting for file`? that means you need to press `calculate` in the `cut raster` panel

### transfering your vinyl cut to your desired surface
- take the vinyl cut design from the cutter
  - the vinyl cut (vc) has two sides: side D is the side with the cut design; side B is the backing (the backing should not have been cut by the vinyl cutter)
- cut a piece of **transfer paper** (tp) that is larger than your design. the transfer paper has two sides: side S is the sticky side, and side T is the textured side.
- place the tp and vc together so that the four faces look like the following
  - tpT - tpS | vcD | vcB
  - note that tp is actually a single layer, which is why its two sides are separated with a dash rather than a pipe
- you can now remove vcB, which will expose the sticky back part of vcD
- stick the `(tpT - tpS | vcD)` onto your desired surface (ds); it will stick because of vcD's sticky back
  - the result is `tpT - tpS | vcD | ds`
- carefully attempt to remove tp; the goal is to have the adhesion between tpS and vcD be less than the adhesion between vcD and ds. you may need to use tweezers here
