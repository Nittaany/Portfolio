import Image from "next/image";
import Head from "next/head";

const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-blue-900 text-white p-8 text-center flex flex-col items-center justify-center min-h-screen animate-fade-in"
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        />
      </Head>
      <div className="img-container mb-6">
        <Image
          src="/images/PP.jpeg"
          alt="profile-pic"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <h1 className="text-4xl font-bold mb-2 pacifico">Hi, I'm S U J A L !</h1>
      <p className="mb-2">
        I'm a Computer Science Engineering student with a passion for CYBER
        SECURITY
      </p>

      <p>
        <a href="/projects/" className="text-blue-300 underline">
          Take me to the magic land ↗
        </a>
      </p>
    </div>
  );
};

export default Hero;
