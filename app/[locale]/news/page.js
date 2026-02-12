import GeneralLayout from '@/components/general-layout/general-layout';
import { getDictionary } from '@/lib/getDictionary';
import React from 'react';

const page = async ({ params }) => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  return (
    <GeneralLayout dictionary={dictionary} showFooter={false}>
      <div className="responsiveWidth w-full text-greendark">
        <section className="flex h-full w-full flex-col items-center justify-center gap-7 overflow-hidden rounded-3xl border-2 border-black md:mt-0 md:h-[calc(100vh-180px)]"></section>
      </div>
    </GeneralLayout>
  );
};

export default page;
