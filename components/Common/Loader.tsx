const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-dark gap-2">
      <h1 className="text-4xl font-medium text-primary">Loading . . .</h1>
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
};

export default Loader;
