import { z } from "zod";

export const signupInput = z.object({
  username: z.string(),
  password: z.string(),
});

export type signUpParams = z.infer<typeof signupInput>;
