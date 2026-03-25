import type { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-5">
      <h3 className="font-semibold text-gray-700 mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default Card;
