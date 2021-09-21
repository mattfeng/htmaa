# notes - working on the press-fit construction kit

## general tricks
- use github to transfer unsensitive files. because the machines usually have internet access, it's easier to pull files down from github than to log in and log out every time you need a file

## laser cutting
- a 1.5 inch bond length is too large
- laser cutter bed is 32 inches by 18 inches
- a good next step would be to figure out how to assemble the pieces in CAD so I can picture the whole DNA molecule in the CAD drawing

## cad tricks
- constraining your CAD drawing is super important for parametric models, because if you don't and then try to change your parameters, the software will probably place your sketch in locations that don't maintain the relations (e.g. shapes, angles, and lengths) you want.
- probably a bad practice, but if you're in a time crunch and want to constrain your CAD drawing, you can fix certain lines to the canvas; this is useful if you fix construction lines that define the origin of each component, so that the component doesn't translate when resized
- **getting angles correct.** because I wanted my DNA to require 10 bases every turn, I had to ensure that the angle between base pairs was 144 degrees (which would form a 10-sided polygon).
- the final challenge was figuring out how to get the model to stand
