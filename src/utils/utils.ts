/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 *  ATTENTION! FREE SOFTWARE
 *  This website is free software (free as in freedom).
 *  If you use any part of this code, you must make your entire project's source code
 *  publicly available under the same license. This applies whether you modify the code
 *  or use it as it is in your own project. This ensures that all modifications and
 *  derivative works remain free software, so that everyone can benefit.
 *  If you are not willing to comply with these terms, you must refrain from using any part of this code.
 *
 *  For full license terms and conditions, you can read the AGPL-3.0 here:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 */

export function assertNotNull(
  value: unknown
): asserts value is NonNullable<typeof value> {
  if (value === null) throw new Error('Nope');
}

export function assertInstanceOf<T>(
  element: unknown,
  expected: new () => T
): asserts element is T {
  if (!element || !(element instanceof expected)) {
    const received = !element ? 'null' : element.constructor.name;
    throw new Error(
      `Expected element to be a ${expected.name}, but was ${received}`
    );
  }
}

export function getElementById(
  id: string,
  instance = HTMLElement,
  fragment?: DocumentFragment
) {
  const node = fragment || document;
  const element = node.getElementById(id);

  assertInstanceOf(element, instance);

  return element;
}

export const scale = (
  inNum: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => {
  if (inMin === inMax) {
    return outMin;
  }
  return ((inNum - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

export const capitalizeString = (str: string, lowerRest = true): string =>
  str.slice(0, 1).toUpperCase() +
  (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));

export const capitalizeSlug = (str: string): string =>
  str
    .split('-')
    .map((word) => capitalizeString(word))
    .join(' ');

export const throttle = (func: (...args: any[]) => unknown, ms: number) => {
  let throttled: boolean;
  return function wait(this: any, ...args: any[]) {
    if (!throttled) {
      func.apply(this, args);
      throttled = true;
      setTimeout(() => {
        throttled = false;
      }, ms);
    }
  };
};
