import type { FC } from 'react';
import { Helmet } from 'react-helmet';

const withHelmet = (Component: FC, { title, description }: Partial<Record<'title' | 'description', string>>) => {
  const WithHelmet = () => {
    return (
      <>
        <Helmet>
          {title && <title>{title}</title>}
          {description && <meta name="description" content={description} />}
        </Helmet>
        <Component />
      </>
    );
  };
  return WithHelmet;
};

export default withHelmet;
