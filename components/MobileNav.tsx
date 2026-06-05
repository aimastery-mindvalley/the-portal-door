"use client";

import { useState } from "react";
import Link from "next/link";

const AMAZON_URL =
  "https://www.amazon.com/Portal-Door-Time-Remembering-ebook/dp/B0GB5S4T8Q/ref=sr_1_1?crid=GFFAEDKC30Y6&dib=eyJ2IjoiMSJ9.9Uvfmk11L-HqZOvB7qIVBtr-du2Ns_P2tnLP4FpA1WVNtybSwZNm6Hxym0OcjasyIqzL1Dn9XGJRJuOJ5qpZfPqZL1YtfPgwVcz15d5W1O9jWBYb441TGgA9Uf4DFf-Ak0KFfdNTEhQumJgr64ZAiNfVKHPRSSrDrcUdQAsKDuTVKv8K1z_KiEMGpyUGsXWqJ9beFt8aOSe6wcDrYDNpr8zLIhnW82_S30Vu6f3Ooa4.Nmt3kjZuDx9-auzV_gNkzlRekC25SCdjTjQyND1yBgI&dib_tag=se&keywords=the+portal+door&qid=1775861866&s=books&sprefix=the+portal+door%2Cstripbooks-intl-ship%2C173&sr=1-1";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`block h-px w-6 bg-frost transition-all duration-300 ${
            open ? "translate-y-[3.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-px w-6 bg-frost transition-all duration-300 ${
            open ? "-translate-y-[2.5px] -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-abyss/80 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <nav
            className="flex h-full flex-col items-center justify-center gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href="#author"
              onClick={() => setOpen(false)}
              className="font-display text-2xl tracking-widest text-frost transition hover:text-white"
            >
              Authors
            </Link>
            <Link
              href="#order"
              onClick={() => setOpen(false)}
              className="font-display text-2xl tracking-widest text-frost transition hover:text-white"
            >
              The Door Is Open
            </Link>
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4"
              onClick={() => setOpen(false)}
            >
              Order the Book
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
