import type { AbstractIntlMessages } from "next-intl";

function isMessageTree(value: unknown): value is AbstractIntlMessages {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** Locale messages override English; missing keys fall back to `en`. */
export function mergeMessages(
  base: AbstractIntlMessages,
  override: AbstractIntlMessages,
): AbstractIntlMessages {
  const result: AbstractIntlMessages = { ...base };

  for (const key of Object.keys(override)) {
    const baseValue = base[key];
    const overrideValue = override[key];

    if (isMessageTree(baseValue) && isMessageTree(overrideValue)) {
      result[key] = mergeMessages(baseValue, overrideValue);
    } else if (overrideValue !== undefined) {
      result[key] = overrideValue;
    }
  }

  return result;
}
