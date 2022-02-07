import * as React from 'react';
import withDefaults from '@/utils/with-defaults';

interface Props {
  width?: number;
  height?: number;
  size?: number;
  fill?: string;
}

const defaultProps = {
  width: 24,
  height: 24,
};

const ChevronDown: React.FC<Props> = ({
  size,
  fill,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={fill || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-down"
      {...props}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
};

const MemoChevronDown = React.memo(ChevronDown);

export default withDefaults(MemoChevronDown, defaultProps);
