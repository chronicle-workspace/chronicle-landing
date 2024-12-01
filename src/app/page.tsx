import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-[80px] px-[32px] pb-[32px] flex flex-col gap-[32px] h-dvh">
      <div className="flex flex-col gap-[10px] items-center ">
        <div className="h-[128px] relative w-full">
          <Image src="/logo.svg" alt="logo" fill />
        </div>

        <h1 className="text-[24px] font-bold">멀티미디어 일기 플랫폼</h1>

        <Link href={"/privacy"} className="text-[14px] text-gray-500">
          개인정보 처리방침
        </Link>
      </div>

      <div className="rounded-[24px] overflow-hidden relative w-full h-full">
        <Image src="/landing.avif" alt="landing" fill objectFit="cover" />
      </div>
    </div>
  );
}
