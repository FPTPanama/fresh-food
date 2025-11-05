import { Inter } from "next/font/google";
import "./globals.css";
import '../styles/global.scss';
import '../styles/header.scss';
import '../styles/footer.scss';
import '../styles/general_layout.scss';
import '../styles/home.scss';
import '../styles/red-social.scss';
import '../styles/burger-menu.scss';
import '../styles/contact.scss';
import '../styles/form-hrk.scss';
import '../styles/services.scss';
import '../styles/products.scss';
import TagSide from "@/components/TagSide/TagSide";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Industrial Supply Network | Industrial Supply Solutions",
  description: "We provide comprehensive industrial supply solutions and services",
  openGraph: {
    title: 'Industrial Supply Network',
    description: "We provide comprehensive industrial supply solutions and services",
    url: 'https://industrialsupplynetwork.com',
    siteName: 'www.industrialsupplynetwork.com',
    keywords: ['industrial', 'supply', 'network', 'solutions'],
    images: [
      {
        url: 'https://industrialsupplynetwork.com/img/metaimage.webp',
        width: 1200,
        height: 630,
        alt: 'Industrial Supply Network'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
  

};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classNames('scrollbar-thin')}>
        <TagSide />
      {/* <Header /> */}
        {children}
      {/* <Footer /> */}
      </body>
    </html>
  );
}


