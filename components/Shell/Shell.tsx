import React from "react";

interface Props {
  colour?: string;
}

export const Shell = ({ colour }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 39.311 39.311"
      className="block absolute inset-0"
    >
      <path
        fill={colour}
        d="M34.968 21.033c0 10.094-6.856 18.278-15.312 18.278-8.458.001-15.313-8.184-15.313-18.278C4.343 10.938 11.198 0 19.655 0s15.313 10.938 15.313 21.033z"
      />
    </svg>
  );
};
