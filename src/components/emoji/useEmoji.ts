import { Ref, computed, ref, watch } from "vue";
import { Emoji, EmojiCategory, EmojiCategoryName } from "./EmojiType";

const EmojiCategorys: Record<EmojiCategoryName, EmojiCategory> = {
  SMILEYS_PEOPLE: {
    name: "SMILEYS_PEOPLE",
    range: {
      start: 0x1f600,
      end: 0x1f64f,
    },
  },
  ANIMALS_NATURE: {
    name: "ANIMALS_NATURE",
    range: {
      start: 0x1f400,
      end: 0x1f4ff,
    },
  },
  FOOD_DRINK: {
    name: "FOOD_DRINK",
    range: {
      start: 0x1f34f,
      end: 0x1f37f,
    },
  },
  ACTIVITY: {
    name: "ACTIVITY",
    range: {
      start: 0x1f3a0,
      end: 0x1f3ff,
    },
  },
  TRAVEL_PLACES: {
    name: "TRAVEL_PLACES",
    range: {
      start: 0x1f680,
      end: 0x1f6ff,
    },
  },
  OBJECTS: {
    name: "OBJECTS",
    range: {
      start: 0x1f4a0,
      end: 0x1f4ff,
    },
  },
  SYMBOLS: {
    name: "SYMBOLS",
    range: {
      start: 0x1f300,
      end: 0x1f5ff,
    },
  },
  FLAGS: {
    name: "FLAGS",
    range: {
      start: 0x1f1e6,
      end: 0x1f1ff,
    },
  },
};

const getEmoji = code => {
  return String.fromCodePoint(code);
};

export const useEmoji = (selectCategory: Ref<EmojiCategoryName>) => {
  const category = computed(() => EmojiCategorys[selectCategory?.value ?? "SMILEYS_PEOPLE"]);
  const emojis = ref<Emoji[]>([]);
  const representativeEmojis = ref(
    (function (): Emoji[] {
      let datas: Emoji[] = [];
      Object.keys(EmojiCategorys).forEach(key => {
        const ec = EmojiCategorys[key];
        datas.push({
          category: ec,
          code: ec.range.start,
          emoji: getEmoji(ec.range.start),
        });
      });
      return datas;
    })(),
  );
  const setEmojis = () => {
    emojis.value = [];
    const { start, end } = category.value.range;
    for (let code = start; code <= end; code++) {
      emojis.value.push({
        emoji: getEmoji(code),
        code,
        category: category.value,
      });
    }
    console.log(emojis.value);
  };
  watch(
    category,
    () => {
      setEmojis();
    },
    {
      deep: true,
      immediate: true,
    },
  );
  return { emojis, representativeEmojis };
};
