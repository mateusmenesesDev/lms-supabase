import { forwardRef, type ComponentProps } from "react";
import { cn } from "~/lib/utils";

type Props = {
  leftLabel?: string;
  rightLabel?: string;
  leftLabelClassName?: string;
  rightLabelClassName?: string;
} & ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      leftLabel,
      rightLabel,
      className,
      leftLabelClassName,
      rightLabelClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <label className="form-control w-full">
        <div className="label">
          {leftLabel && (
            <span className={cn("label-text", leftLabelClassName)}>
              {leftLabel}
            </span>
          )}
          {rightLabel && (
            <span className={cn("label-text-alt", rightLabelClassName)}>
              {rightLabel}
            </span>
          )}
        </div>
        <input
          {...props}
          ref={ref}
          className={cn("input input-bordered w-full", className)}
        />
      </label>
    );
  },
);

Input.displayName = "Input";

export default Input;
