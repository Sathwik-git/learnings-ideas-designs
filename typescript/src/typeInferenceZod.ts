import z from "zod";

const userSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  age: z.number().optional(),
});

type finalUserSchema = z.infer<typeof userSchema>;

const user: finalUserSchema = {
  name: "sathwik",
  email: "sddjskldj",
};
