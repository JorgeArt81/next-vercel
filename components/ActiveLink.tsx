import { CSSProperties } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';

interface Props {
  href: string;
  text: string;
}

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};
export const ActiveLink = ({ href, text }: Props) => {
  const { asPath } = useRouter();
  return (
    <Link href={href} legacyBehavior>
      <a style={asPath === href ? style : null}>{text}</a>
    </Link>
  );
};
