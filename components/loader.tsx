import Image from "next/image";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center">
      <div className="w-10 h-10 relative animate-pulse">
        <Image alt="logo" fill src="/logo.png" />
      </div>
      <p className="text-sm text-muted-foreground">
        I&rsquo;m working on it...
      </p>
    </div>
  );
};

export default Loader;
