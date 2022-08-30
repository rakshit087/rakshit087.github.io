export const ProjectCard = () => {
  return (
    <>
      <div className="px-2 py-1 mb-2 border border-gray-700 border-solid rounded-full bg-pink-50 w-fit">
        <p className="text-xs">Aug '22 to Nov '22</p>
      </div>
      <div className="w-full mb-8 bg-white border-2 border-gray-700 border-solid rounded-xl">
        <div
          className="relative right-0 w-5 h-5 -translate-y-1/2 bg-gray-700 border-2 border-gray-400 border-solid rounded-full top-1/2"
          style={{
            right: '29px',
          }}
        ></div>
        <div className="px-4">
          <h2 className="mb-4 text-2xl">Kolumn</h2>
          <p className="mb-4">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which don't look even slightly believable..
          </p>
          <div className="flex mb-4">
            <p className="mr-4 text-gray-700 underline">Live</p>
            <p className="mr-4 text-gray-700 underline">Gallery</p>
            <p className="mr-4 text-gray-700 underline">Code</p>
          </div>
        </div>
      </div>
    </>
  );
};
