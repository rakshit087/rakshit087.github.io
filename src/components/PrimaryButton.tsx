interface PrimaryButtonPropsI {
  label: string;
  href?: string;
}

export const PrimaryButton = (props: PrimaryButtonPropsI) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <button className="px-8 py-1 bg-white border-2 border-gray-700 rounded-full shadow-md md:text-lg w-40 md:mr-4 mb-4 md:mb-0">
        {props.label}
      </button>
    </a>
  );
};
