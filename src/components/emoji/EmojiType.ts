export type EmojiCategoryName =
  | "SMILEYS_PEOPLE"
  | "ANIMALS_NATURE"
  | "FOOD_DRINK"
  | "ACTIVITY"
  | "TRAVEL_PLACES"
  | "OBJECTS"
  | "SYMBOLS"
  | "FLAGS";

export interface EmojiRange {
  start: number;
  end: number;
}

export interface EmojiCategory {
  name: EmojiCategoryName;
  range: EmojiRange;
}
export interface Emoji {
  emoji: string;
  code: number;
  category: EmojiCategory;
}
