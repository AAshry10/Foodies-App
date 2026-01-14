'use server';

import { redirect } from "next/navigation";

import { saveMeal } from "./meals.js";
import { revalidatePath } from "next/cache.js";

function isInvalidText(text) {
    return !text || text.trim() === '';
}

export async function ShareMeal(prevState, formData) {
    // Vercel runs your app in serverless functions where the deployed filesystem
    // (including `public/` and the bundled `meals.db`) is read-only at runtime.
    // This demo app writes an uploaded image to `public/images` and inserts into
    // a local SQLite file, which will fail on Vercel unless you switch to
    // external storage + a hosted database.
    if (process.env.VERCEL === '1') {
        return {
            message:
                'Sharing meals is disabled on the deployed version (Vercel runtime is read-only). Run locally, or switch to hosted DB + image storage.'
        };
    }

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    if( 
        isInvalidText(meal.title) || 
        isInvalidText(meal.summary) || 
        isInvalidText(meal.instructions) || 
        isInvalidText(meal.creator) || 
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@')||
        !meal.image || meal.image.size === 0
    ) {
        return {
            message: 'Invalid Inputs, ChecK Your Inputs & Try Again Later'
        }
    }

    try {
        await saveMeal(meal);
        revalidatePath('/meals');
        redirect('/meals');
    } catch (error) {
        console.error('ShareMeal failed:', error);
        return {
            message: 'Failed to create meal. Please try again later.'
        };
    }
}
