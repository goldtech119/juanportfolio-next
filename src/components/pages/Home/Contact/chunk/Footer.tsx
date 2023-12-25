import { FC } from 'react';

const Footer: FC = () => {
  return (
    <p className="py-10 text-center">
      || Design {' '}
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
      >
        <span className="text-primary hover:underline"></span>
      </a>{' '}
      && coded by{' '}
      <a>
        {' '}
        <span className="text-primary hover:underline">Juan David Sanchez Rodriquez</span>
      </a>{' '}
      ||
    </p>
  );
};

export default Footer;
