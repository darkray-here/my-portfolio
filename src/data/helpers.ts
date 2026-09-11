/**
 * Shared helpers for loading JSON content collections at build time via
 * Vite's `import.meta.glob`. Keeps the individual loaders small and typed.
 */

export function basename(path: string): string {
  const parts = path.split("/");
  const file = parts[parts.length - 1] ?? path;
  const dot = file.lastIndexOf(".");
  return dot === -1 ? file : file.slice(0, dot);
}

export function asString(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

export function asStringArray(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  return value.filter((v): v is string => typeof v === "string");
}

export function asBoolean(value: unknown): boolean | undefined {
  return typeof value === "boolean" ? value : undefined;
}

/**
 * Coerce an unknown value into a known string union, returning `undefined`
 * for anything that isn't one of the allowed values. Prevents malformed CMS
 * data from being blindly cast into a TypeScript union.
 */
export function asEnum<T extends string>(
  value: unknown,
  allowed: readonly T[],
): T | undefined {
  return typeof value === "string" && (allowed as readonly string[]).includes(value)
    ? (value as T)
    : undefined;
}

export type JsonModuleMap = Record<string, unknown>;

/**
 * Eager JSON globs can resolve to either `{ default: {...} }` or the parsed
 * object directly depending on the module format. Unwrap either shape.
 * Returns an empty object for `null`/`undefined`/non-object values so a
 * malformed content file degrades gracefully instead of throwing.
 */
export function unwrap(value: unknown): Record<string, unknown> {
  const mod = value as { default?: unknown } | null;
  const data = mod && typeof mod === "object" && "default" in mod ? mod.default : value;
  return typeof data === "object" && data !== null
    ? (data as Record<string, unknown>)
    : {};
}

/** Extract `{ id, raw }` entries from an eager `import.meta.glob` of a folder. */
export function folderEntries(
  modules: JsonModuleMap,
): { id: string; raw: Record<string, unknown> }[] {
  return Object.entries(modules).map(([path, value]) => ({
    id: basename(path),
    raw: unwrap(value),
  }));
}

/** Extract the single object from an eager `import.meta.glob` of one file. */
export function singleton(modules: JsonModuleMap): Record<string, unknown> {
  return unwrap(Object.values(modules)[0]);
}
