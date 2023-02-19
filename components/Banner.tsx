function Banner() {
  return (
    <div className="mb-10 flex flex-col justify-between px-10 py-5 font-bold lg:flex-row lg:space-x-5">
      <div>
        <h1 className="text-7xl">Sayan&apos;s Daily Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-[#F7AB0A] decoration-4">
            Every Developer's & creative writer's
          </span>{" "}
          favorite portal!
        </h2>
      </div>

      <p className="mt-5 max-w-sm text-gray-400 md:mt-2">
        New product features | The latest in technology | Creative Writings and
        more!
      </p>
    </div>
  );
}
export default Banner;
