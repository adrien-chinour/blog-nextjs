import {z} from "zod";
import * as Zod from "@/types/zod";

export type Tag = z.infer<typeof Zod.Tag>;
export type Project = z.infer<typeof Zod.Project>;
export type Article = z.infer<typeof Zod.Article>;
export type Comment = z.infer<typeof Zod.Comment>;
