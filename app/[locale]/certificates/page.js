import GeneralLayout from '@/components/general-layout/general-layout';
import { getDictionary } from '@/lib/getDictionary';
import CertificationsSection from '@/components/certifications/CertificationsSection';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: locale === 'es'
      ? 'Certificaciones - Fresh Food Panamá | Certificaciones Internacionales'
      : 'Certifications - Fresh Food Panama | International Certifications',
    description: locale === 'es'
      ? 'Nuestras certificaciones internacionales GlobalG.A.P. que garantizan la calidad y seguridad de nuestros productos agrícolas.'
      : 'Our international GlobalG.A.P. certifications that guarantee the quality and safety of our agricultural products.',
    keywords: locale === 'es'
      ? 'certificaciones globalgap, certificaciones frutas, certificaciones agricolas panama, globalgap certificado'
      : 'globalgap certifications, fruit certifications, agricultural certifications panama, globalgap certificate',
    openGraph: {
      title: locale === 'es' ? 'Certificaciones - Fresh Food Panamá' : 'Certifications - Fresh Food Panama',
      description: locale === 'es'
        ? 'Certificaciones internacionales que garantizan la calidad de nuestros productos'
        : 'International certifications that guarantee the quality of our products',
      url: `https://freshfoodpanama.com/${locale}/certificates`,
    },
    alternates: {
      canonical: `https://freshfoodpanama.com/${locale}/certificates`,
      languages: {
        'es': 'https://freshfoodpanama.com/es/certificates',
        'en': 'https://freshfoodpanama.com/en/certificates',
      },
    },
  };
}

const Certificates = async ({ params }) => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <div className="responsiveWidth text-greendark">
      <GeneralLayout dictionary={dictionary}>
        <section className="flex flex-col items-center justify-center w-full min-h-screen py-10 md:py-20">
          <CertificationsSection showDetails={true} layout="cards" className="w-full" />
        </section>
      </GeneralLayout>
    </div>
  );
};

export default Certificates;

