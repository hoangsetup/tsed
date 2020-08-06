import {JsonEntityFn} from "@tsed/schema";

/**
 * Set integer type.
 *
 * ::: warning
 * For v6 user, use @@Integer@@ from @tsed/schema instead of @@AllowTypes@@ from @tsed/common.
 * :::
 *
 * ## Example
 *
 * ```typescript
 * class Model {
 *    @Integer()
 *    property: number;
 * }
 * ```
 *
 * Will produce:
 *
 * ```json
 * {
 *   "type": "object",
 *   "properties": {
 *     "property": {
 *       "type": "integer"
 *     }
 *   }
 * }
 * ```
 *
 * ### With array of multiple types
 *
 * ```typescript
 * class Model {
 *    @Integer()
 *    property: number[];
 * }
 * ```
 *
 * Will produce:
 *
 * ```json
 * {
 *   "type": "object",
 *   "properties": {
 *     "property": {
 *       "type": "array",
 *       "items": {
 *          "type": "integer"
 *       }
 *     }
 *   }
 * }
 * ```
 *
 * @decorator
 * @validation
 * @swagger
 * @schema
 * @input
 */
export function Integer() {
  return JsonEntityFn(store => {
    store.itemSchema.type("integer");
  });
}
