import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  type: 'primary' | 'secondary' | 'ghost';
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ children, type, color }) => {
  return (
    <button
      className={clsx(
        'flex items-center justify-center gap-sm rounded-md py-sm text-button transition-all duration-100 ease-in-out max-lg:w-full',
        {
          'border-line-width border-dashed border-light-neutral-gray bg-light-background px-lg text-light-text hover:border-solid hover:opacity-75 active:border-solid active:opacity-50':
            type === 'primary',
          'text-light-text hover:opacity-75 active:opacity-50':
            type === 'secondary',
          'text-primary border-line-width border-dashed border-light-primary px-lg hover:border-solid active:border-solid active:border-light-secondary active:text-light-secondary':
            type === 'ghost',
        },
      )}
      style={{
        color,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
