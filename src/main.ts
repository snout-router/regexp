/**
 * Returns an escaped version of a string for use in a regular expression.
 *
 * Not suitable for use inside character classes, as hyphens are not escaped.
 * This is due to the fact that when the "u" modifier is enabled, escaping
 * hyphens outside of character classes causes an error to be thrown, which
 * looks like:
 *
 *     SyntaxError: Invalid regular expression: <expression>: Invalid escape
 */
export const escape: (literal: string) => string = literal => literal.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
