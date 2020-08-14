import { VectorSpace } from "./src/vectorspace";

/**
 * Okay so one thing that I need to do is think about the
 * canvas as a pixel space, that is, 2d array of points, as math-wise
 * that's easy to design to (it literally is just cartesian points),
 * then we scale the cartesian points according to the "zoom" level
 * we want, and have canvas render the pixels as is.
 *
 * One thing to keep in mind is "which pixel wins", only one pixel will
 * be "on top", and that's the one that gets rendered. So order priority
 * is a pretty big deal here.
 *
 * There should be a way to inject pixels into our grid object,
 * because we're going to want objects with different pixel color
 * requirements, like the gridlines will not be the same as vector
 * coloring. It feels hacky to not have a mathematical object representing
 * grid-lines, so I do want to conceptualize them as points in R^2 with
 * location but not orientation. Vertical lines then become multi-valued
 * functions... but maybe the trick is that, since we don't care about
 * knowing if they are oriented Up/Down/Left/Right, grid lines just become
 * vectors themselves, at regular offset intervals, spanning the size of
 * our canvas. That I think feels best, and having color associates for
 * vectors also feels good as a pedagogically useful thing.
 *
 * So we have (1) concept of vectors, (2) concept of whether or not the
 * vector has an arrowhead, (3) concept of vector color.
 *
 * Ultimately, we want our mathematical objects to be considered as
 * a set, and the canvas to be a dynamic update as that set changes
 * over time.
 */

const canvas = new VectorSpace(document.querySelector("#canvas-1 canvas"));

function example() {
  canvas.clear();
}
example();
