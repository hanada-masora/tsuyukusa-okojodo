// src/content/config.ts
import { defineCollection, z } from "astro:content";

export const collections = {
  works: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),

      // 表現形式（一覧表示用）
      type: z.enum(["novel", "comic", "illust"]),

      // サムネイル（任意）
      thumbnail: z.string().optional(),

      // 画像（配列）
      images: z.array(z.string()).optional(),

      // シリーズ（任意）
      series: z
        .object({
          id: z.string(),     // 内部識別用（slug）
          title: z.string(),  // 表示用（日本語OK）
        })
        .optional(),

      // 公開日（並び替え用）
      published: z.date().optional(),
    }),
  }),
};
