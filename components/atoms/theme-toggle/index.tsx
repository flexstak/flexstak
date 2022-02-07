import { Moon, Sun } from '@/components/icons ';
import { useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';

interface Props {
  className?: string;
}

export const ThemeToggle: React.FC<Props> = ({ className }) => {
  const { theme, type } = useTheme();
  const isDark = type === 'dark';
  const { setTheme } = useNextTheme();
  return (
    <span
      style={{
        display: 'flex',
        width: 'auto',
        height: 'auto',
        cursor: 'pointer',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={(_e) => setTheme(!isDark ? 'dark' : 'light')}
    >
      {isDark ? (
        <Sun filled fill={theme?.colors.accents7.value} size={20} />
      ) : (
        <Moon filled fill={theme?.colors.accents7.value} size={20} />
      )}
    </span>
  );
};

export default ThemeToggle;
