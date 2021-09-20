# vinyl cutter and snap fit joint (2021-09-19)

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
- carefully attempt to remove tp; you may need to use tweezers here
  - don't use a ds like paper, because why you try to remove tp, you will tear the paper and the result will be sad

## cad notes
- red construction line = underconstrained
- black construction line = full constrained
- constraining to midpoint:
  - create midpoint (triangle symbol), then coincident to midpoint
- **avoid exporting your construction lines in dxf.** when exporting your sketch to DXF, to avoid the construction lines, you should extrude your sketch to a body, then select a face of that body, create a sketch from it, and export that sketch to a DXF.

## laser cutter notes
- snap fit joints aren't the most suitable for cardboard, because cardboard doesn't have the flexibility to stretch in order to place the two notches together. they are definitely stronger in preventing the cardboard from sliding back out, however.
- right side laser
  - 100% power, 10% speed, 1000 rate, 0.22 z-axis
