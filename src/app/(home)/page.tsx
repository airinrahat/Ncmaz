import React from 'react'
import { DEMO_CATEGORIES } from '@/data/taxonomies'
import { DEMO_POSTS, DEMO_POSTS_AUDIO } from '@/data/posts'
import SectionHero from '@/components/SectionHero/SectionHero'
import rightImg from '@/images/hero-right.png'
import Vector1 from '@/images/Vector1.png'
import SectionSubscribe2 from '@/components/SectionSubscribe2/SectionSubscribe2'
import BackgroundSection from '@/components/BackgroundSection/BackgroundSection'
import SectionSliderNewAuthors from '@/components/SectionSliderNewAthors/SectionSliderNewAuthors'
import { DEMO_AUTHORS } from '@/data/authors'
import SectionGridCategoryBox from '@/components/SectionGridCategoryBox/SectionGridCategoryBox'
import Image from 'next/image'
import SectionSliderPosts from '@/components/Sections/SectionSliderPosts'

// DEMO DATA
const POSTS = DEMO_POSTS
const MAGAZINE1_POSTS = POSTS.filter((_, i) => i >= 0 && i < 8)
//

const PageHomeDemo3: React.FC = () => {
	return (
		<div className="nc-PageHomeDemo3 relative">
			<div className="container relative">
				<SectionHero
					rightImg={rightImg}
					className="pb-16 pt-10 md:py-16 lg:pb-28 lg:pt-20"
					heading={
						<span>
							Far from face <br /> but not from {` `}
							<span className="relative pr-3">
								<Image
									className="absolute -start-1 top-1/2 w-full -translate-y-1/2 transform"
									src={Vector1}
									alt=""
								/>
								<span className="relative">heart</span>
							</span>
						</span>
					}
					btnText="Getting started"
					subHeading="Let stay at home and share with everyone the most beautiful stories in your hometown 🎈"
				/>

				<SectionGridCategoryBox
					headingCenter={false}
					categoryCardType="card2"
					className="pb-16"
					categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
				/>

				<SectionSliderPosts
					className="py-10"
					postCardName="card10"
					heading="Sea travel enthusiast"
					subHeading="Over 218 articles about sea travel"
					posts={POSTS.filter((_, i) => i < 8)}
				/>

				<div className="relative py-16">
					<BackgroundSection />
					<SectionSliderNewAuthors
						heading="Newest authors"
						subHeading="Say hello to future creator potentials"
						authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
					/>
				</div>

				<SectionSubscribe2 className="pb-16 lg:pb-28" />
			</div>
		</div>
	)
}

export default PageHomeDemo3
