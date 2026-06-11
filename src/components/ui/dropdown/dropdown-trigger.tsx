"use client";

import {
  useDropdown,
} from "./dropdown-context";

import type {
  DropdownTriggerProps,
} from "./dropdown.types";

export default function DropdownTrigger({
  children,
  className = "",
  ...props
}: DropdownTriggerProps) {
  const {
    toggle,
  } = useDropdown();

  return (
    <button
      type="button"
      onClick={toggle}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}