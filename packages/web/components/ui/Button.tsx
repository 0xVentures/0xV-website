import { FC, HTMLProps } from 'react';

import { classNames } from '../../helpers/classNames';

type Props = HTMLProps<HTMLButtonElement> & { type?: 'button' };
const Button: FC<Props> = ({ children, className = '', ...props }) => {
  const defaultClasses =
    'inline-flex h-12 w-36 justify-center items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500';

  return (
    <button type="button" className={classNames(defaultClasses, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
