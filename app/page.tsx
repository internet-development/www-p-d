import '@root/global.scss';

import DefaultLayout from '@components/DefaultLayout';

import SectionHero from '@sections/SectionHero';
import SectionNavigation from '@sections/SectionNavigation';

export async function generateMetadata({ params, searchParams }) {
  const title = 'Principle & Delegation';
  const description = 'A Protocol Labs Network Company, New York, Bangalore, Zug, and Tokyo';
  const url = 'https://www-p-d.onrender.com';

  return {
    title,
    description,
    url,
    openGraph: {
      title,
      description,
      url,
      // SUMMARY_LARGE_IMAGE: 1500x785
      images: [''],
    },
    twitter: {
      title,
      description,
      url,
      handle: '@internetxstudio',
      cardType: 'summary_large_image',
    },
  };
}

export default async function Page(props) {
  return (
    <DefaultLayout>
      <SectionNavigation />
      <SectionHero />
    </DefaultLayout>
  );
}
