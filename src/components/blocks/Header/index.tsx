import { useTranslation } from '@/app/i18n';
import LinkList from '@/components/LinkList';
import { blogName, headerLinks } from '@/constants';
import { createLocaleLinks } from '@/helpers';
import { LocaleComponentProps } from '@/types';
import { Button } from '@UI';

import LanguageSwitcher from './LanguageSwitch';
import styles from './styled.module.scss';

const { header, blogName: blogNameStyle, controls, wrapper } = styles;

export const Header = async ({ lng }: LocaleComponentProps) => {
  const { t } = await useTranslation(lng, 'header');
  return (
    <div className={wrapper}>
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
    </div>
  );
};
