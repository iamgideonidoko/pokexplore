import { type ComponentProps, forwardRef, useRef, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const inputStyles = (className?: string) =>
  cva(
    twMerge(
      `block w-full rounded-md border p-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-inset focus-visible:border-blue-500 focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-blue-300 sm:text-sm sm:leading-6 ${
        className ?? ""
      }`,
    ),
    {
      variants: {},
    },
  );

export interface InputProps
  extends ComponentProps<"input">,
    VariantProps<ReturnType<typeof inputStyles>> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input ref={ref} className={inputStyles(className)({})} {...props} />
    );
  },
);

Input.displayName = "Input";

export const DebouncedInput = forwardRef<
  HTMLInputElement,
  {
    debounce?: number;
  } & InputProps
>(
  (
    { onChange, debounce = 800, className, value: initialValue, ...props },
    ref,
  ) => {
    const [value, setValue] = useState(initialValue);
    const timerRef = useRef<number>();
    return (
      <input
        ref={ref}
        value={value}
        className={inputStyles(className)({})}
        {...props}
        onChange={(...arg) => {
          setValue(arg[0].target.value);
          clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => {
            if (onChange) {
              onChange(...arg);
            }
          }, debounce);
        }}
      />
    );
  },
);

DebouncedInput.displayName = "DebouncedInput";
