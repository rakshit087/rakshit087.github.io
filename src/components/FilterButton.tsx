import { useState } from 'react';
import { MdFilterList } from 'react-icons/md';

interface FilterButtonProps {
  selectedTag: string;
  tags: string[];
  setTag: any;
}

export const FilterButton = ({ selectedTag, tags, setTag }: FilterButtonProps) => {
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <div className="relative flex flex-col items-end justify-end w-full mb-6">
      <button
        id="dropdownDefault"
        className="flex items-center justify-center"
        type="button"
        onClick={() => setOpened(!opened)}
      >
        <MdFilterList className="mr-1" /> Filter
      </button>
      <div
        id="dropdown"
        className={
          opened
            ? 'bg-white absolute flex border-2 border-gray-700 rounded-lg shadow-xl py-2 z-10 flex-col top-8 px-1'
            : 'hidden'
        }
      >
        {tags.map((tag: string, index: any) => (
          <p
            key={index}
            className={selectedTag === tag ? 'mb-2 bg-cyan-50 px-4 rounded-full' : 'mb-2 px-4'}
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
