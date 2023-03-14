export const HomePageLoading = () => {
  return (
    <div className="animate-pulse px-10">
      <div className="h-10 w-60 rounded-md"></div>
      <div className="h-12 w-8/12 rounded-md bg-gray-300 mb-10"></div>
      <div className="h-40 w-40 rounded-full bg-gray-300"></div>
      <div className="flex w-full flex-1 flex-col">
        <div className="my-5 w-1/2">
          <div className="flex flex-col space-y-2">
            <div className="h-6 w-11/12 rounded-md bg-gray-300"></div>
            <div className="h-6 w-10/12 rounded-md bg-gray-300"></div>
            <div className="h-6 w-9/12 rounded-md bg-gray-300"></div>
            <div className="h-6 w-9/12 rounded-md bg-gray-300"></div>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="h-40 w-60 rounded-md bg-gray-300"></div>
        <div className="h-40 w-60 rounded-md bg-gray-300"></div>
        <div className="h-40 w-60 rounded-md bg-gray-300"></div>
      </div>
    </div>
  );
};

export default HomePageLoading;
