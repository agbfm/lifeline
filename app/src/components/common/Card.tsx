import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Card = ({ children, onClick }: Props) => (
  <div
    className="flex flex-col bg-white rounded-md shadow-md px-6 py-4 cursor-pointer"
    onClick={() => (onClick ? onClick() : null)}
  >
    {children}
  </div>
);
