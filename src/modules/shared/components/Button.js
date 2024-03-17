import { Icon } from '@iconify/react';
import React from 'react';

const Button = ({
  label,
  icon,
  type,
  onPress,
  left,
  right,
  styles,
  ...props
}) => {
  return (
    <button
      type={type ? type : 'button'}
      onClick={onPress}
      className={`font-regular px-[20px] items-center shadow-md justify-center rounded-md py-3 text-center inline-flex items-center ${
        props.className || ''
      } ${styles}`}
      // {...props}
    >
      {left && (
        <Icon icon={icon} className={`${label && 'mr-4'} text-[20px]`} />
      )}
      {label && label}
      {right && (
        <Icon icon={icon} className={`${label && 'ml-4'} text-[20px]`} />
      )}
    </button>
  );
};

const withVariant = (variant) => (WrappedComponent) => {
  const variantProps = {
    primary: {
      className: 'bg-brand hover:bg-opacity-80 text-white uppercase my-3'
    },
    secondary: {
      className:
        'bg-brand bg-opacity-20 text-brand hover:bg-brand hover:bg-opacity-10'
    },
    danger: {
      className: 'bg-red hover:bg-opacity-80 text-white'
    },
    link: {
      className: 'text-brand hover:underline'
    },
    link_secondary: {
      className: 'text-gray-1 hover:underline'
    },
    border_button: {
      className:
        'border-brand uppercase px-5 border-[1px] text-brand hover:opacity-60'
    }
  }[variant];

  return (props) => <WrappedComponent {...props} {...variantProps} />;
};

export const PrimaryButton = withVariant('primary')(Button);
export const SecondaryButton = withVariant('secondary')(Button);
export const DangerButton = withVariant('danger')(Button);
export const LinkButton = withVariant('link')(Button);
export const LinkSecondaryButton = withVariant('link_secondary')(Button);
export const BorderButton = withVariant('border_button')(Button);
