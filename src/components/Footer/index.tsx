import Image from 'next/image';
import Link from 'next/link';

import { footerLinks, mediaLinks } from '@/constants';

import LinkList from '../LinkList';
import { Button } from '../UI';

import styles from './styled.module.scss';

const {
  footer,
  top,
  body,
  bottom,
  blogName,
  input,
  form,
  message,
  companyInfo,
  media,
} = styles;

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={top}>
        <h4 className={blogName}>Modsen Client Blog</h4>
        <LinkList links={footerLinks} />
      </div>
      <div className={body}>
        <h2 className={message}>
          Subscribe to our news letter to get latest updates and news
        </h2>
        <form className={form}>
          <input className={input} type="text" placeholder="Enter Your Email" />
          <Button styleType="colored">Subscribe</Button>
        </form>
      </div>
      <div>
        <div className={bottom}>
          <div className={companyInfo}>
            <span>Finstreet 118 2561 Fintown</span>
            <br />
            <span>Hello@finsweet.com 020 7993 2905</span>
          </div>
          <div className={media}>
            {mediaLinks.map(({ title, path }, index) => (
              <Link key={index} href={path}>
                <Image src={title} alt={path} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
