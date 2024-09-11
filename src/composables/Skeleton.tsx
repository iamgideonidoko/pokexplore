import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';

export const AutoSkeleton: FC<Partial<Record<'parentClassName' | 'className', string> & { unit: number }>> = ({
  parentClassName,
  className,
  unit = 1,
}) => {
  return (
    <div className={twMerge('w-full px-4', parentClassName)}>
      {new Array(unit).fill('').map((_, idx) => (
        <div key={idx} className={twMerge('h-64 w-full animate-pulse rounded-2xl bg-gray-100', className)} />
      ))}
    </div>
  );
};
