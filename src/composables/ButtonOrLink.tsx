import type { ComponentProps, FC } from 'react';
import { Link } from 'react-router-dom';

export type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>;

export const ButtonOrLink: FC<ButtonOrLinkProps> = ({ href, ...props }) => {
  const isLink = typeof href !== 'undefined';

  const content = <button {...props} />;

  if (isLink) return <Link to={href}>{content}</Link>;

  return content;
};
