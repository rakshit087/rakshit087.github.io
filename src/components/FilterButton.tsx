import { useState } from 'react';

interface FilterButtonProps {
  tags: string[];
  setTag: any;
}

export const FilterButton = ({ tags, setTag }: FilterButtonProps) => {
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <div className="relative flex flex-col items-end justify-end w-full mb-6">
      <button id="dropdownDefault" className="" type="button" onClick={() => setOpened(!opened)}>
        Filter
      </button>
      <div
        id="dropdown"
        className={
          opened
            ? 'bg-white absolute flex border-2 border-gray-700 rounded-lg shadow-xl px-4 py-2 z-10 flex-col top-8'
            : 'hidden'
        }
      >
        {tags.map((tag: string, index: any) => (
          <p
            key={index}
            className="mb-2"
            onClick={() => {
              setTag(tag);
              setOpened(false);
            }}
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};
