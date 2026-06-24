const 角色状态 = z.object({
  在场: z.coerce.boolean(),
  年龄: z.coerce.number(),
  好感度: z.coerce.number().transform(v => _.clamp(v, 0, 200)),
  高潮值: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
  角色扮演: z.string(),
  服装详情: z.string(),
  情绪: z.string(),
  口腔: z.string(),
  小穴: z.string(),
  胸部: z.string(),
  行为: z.string(),
});

export const Schema = z.object({
  角色: z.object({
    樱桃: 角色状态,
    坂坂白: 角色状态,
    小水: 角色状态,
    施梦露: 角色状态,
  }),
  系统: z.object({
    点数: z.coerce.number().transform(v => _.clamp(v, 0, 99)),
    现状概括: z.string(),
    建议1: z.string(),
    建议2: z.string(),
    建议3: z.string(),
  }),
});

export type Schema = z.output<typeof Schema>;
