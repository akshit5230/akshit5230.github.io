import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-dvh border-b-4 border-b-black">
        <div className="text-5xl font-medium">Hi! I'm Akshit.</div>
        <div className="text-2xl text-center mt-2">I am a software developer.</div>
        <div className="text-2xl text-center">I mostly work with Javascript & Typescript.</div>
        <div className="text-2xl text-center">I also develop cross-platform applications for mobile devices such as iPhones, iPads and Android devices.</div>
        <div className="text-2xl text-center"></div>
        <div className="mt-3 flex flex-row gap-2">
          <Link href="https://github.com/akshit5230" rel="noopener noreferrer" target="_blank">
            <Image
              src="/github.svg"
              alt="Github logo"
              width={30}
              height={30}
              priority
            />
          </Link>
          <Link href="https://stackoverflow.com/users/6025307" rel="noopener noreferrer" target="_blank">
            <Image
              src="/stackoverflow.svg"
              alt="Stackoverflow logo"
              width={30}
              height={30}
              priority
            />
          </Link>
          <Link href="https://www.youtube.com/@thetypescriptdeveloper" rel="noopener noreferrer" target="_blank">
            <Image
              src="/youtube.svg"
              alt="Youtube logo"
              width={30}
              height={30}
              priority
            />
          </Link>
          <Link href="https://steamcommunity.com/id/akshit5230" rel="noopener noreferrer" target="_blank">
            <Image
              src="/steam.svg"
              alt="Steam logo"
              width={30}
              height={30}
              priority
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center h-dvh text-5xl border-b-4 border-b-black">
        FEATURED
      </div>
      <div className="flex justify-center items-center h-dvh text-5xl border-b-4 border-b-black">
        ABOUT
      </div>
    </>
  )
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          // className="dark:invert"
          src="/akshit_avatar.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
