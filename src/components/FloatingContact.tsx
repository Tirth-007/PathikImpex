import Link from "next/link";

export function FloatingContact() {
  return (
    <Link
      href="/inquiry"
      className="fixed bottom-4 left-4 right-4 z-40 inline-flex h-12 items-center justify-center rounded-full bg-neutral-950 px-5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition hover:bg-neutral-800 sm:left-auto sm:right-5 sm:w-auto"
    >
      Request a private quote
    </Link>
  );
}
