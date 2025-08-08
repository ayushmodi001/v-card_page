import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-800 text-white rounded-t-lg">
      <Image
        src="https://placehold.co/128x128/374151/FFFFFF?text=AM"
        alt="Ayush Modi"
        width={128}
        height={128}
        className="rounded-full mb-4 border-4 border-white"
        unoptimized
      />
      <h1 className="text-3xl font-bold">Ayush Modi</h1>
      <p className="text-lg">Full Stack Developer</p>
    </div>
  );
};

export default Header;
