import { useTranslation } from '@/app/i18n';
import { blogName, headerLinks } from '@/constants';
import { createLocaleLinks } from '@/helpers';
import { LocaleComponentProps } from '@/types';

import LanguageSwitcher from '../LanguageSwitch';
import LinkList from '../LinkList';
import { Button } from '../UI/Button';

import styles from './styled.module.scss';

const { header, blogName: blogNameStyle, controls } = styles;

const Header = async ({ lng }: LocaleComponentProps) => {
  const { t } = await useTranslation(lng, 'header');
  return (
    <header className={header}>
      <h4 className={blogNameStyle}>{blogName}</h4>
      <div className={controls}>
        <nav>
          <LinkList
            lng={lng}
            links={createLocaleLinks(
              headerLinks,
              t('links', { returnObjects: true }),
            )}
          />
        </nav>
        <Button>{t('videoButton')}</Button>
        <LanguageSwitcher lng={lng} />
      </div>
    </header>
  );
};

export default Header;
