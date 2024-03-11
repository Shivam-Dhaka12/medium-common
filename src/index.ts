import z from 'zod';

// signup input
export const signupInput = z.object({
	email: z.string().email(),
	password: z.string().min(8),
	name: z.string().optional(),
});

// type inference in zod
export type signupInput = z.infer<typeof signupInput>;

//signin input
export const signinInput = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

export type signinInput = z.infer<typeof signinInput>;

// Create post input
export const createPostInput = z.object({
	title: z.string(),
	content: z.string(),
});

export type createPostInput = z.infer<typeof createPostInput>;

// Update post input
export const updatePostInput = z.object({
	title: z.string().optional(),
	content: z.string().optional(),
	publishedDate: z.date().optional(),
	published: z.boolean().optional(),
});

export type updatePostInput = z.infer<typeof updatePostInput>;
