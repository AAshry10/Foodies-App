import Link from 'next/link'
import { Suspense } from 'react'

import MealsGrid from '@/components/meals/meals-grid'
import classes from './page.module.css'
import classes2 from './loading.module.css';
import { getMeals } from '@/lib/meals'

async function Meals() {
    const meals = await getMeals();

    return <MealsGrid meals={meals}/> 
}

export const metadata = {
  title: 'All Meals',
  description: 'Browse Our Delicios Meals.',
};

export default function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious Meals Created <span className={classes.highlight}>By You</span>
                </h1>
                <p> Choose your favourite recipe and cook it yourself. </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share Your Favourite Recipe. 
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes2.loading}>Loading Meals...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}