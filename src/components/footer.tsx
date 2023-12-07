'use client';
import BuyMeACoffee from '../icons/BuyMeCoffee'

export default function Footer() {
  return (
    <div className="col-start-2 col-end-4 mt-28 flex items-center justify-between">
      <style jsx>
        {`
          .power-by {
            color: rgb(80 80 92);
            display: inline-flex;
            align-items: center;
          }
          .power-by-text {
            margin-right: 0.25rem;
          }
        `}
      </style>

      <span className="power-by">
        <a
            href="https://www.buymeacoffee.com/arorigavin"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg ml-3 mb-3 focus:ring space-x-3 inline-flex justify-center items-center  px-6 mt-1 py-2 hover:scale-105 hover:bg-accent transition-all duration-75 border-accent max-w-fit mx-auto "
          >
            <BuyMeACoffee className="w-6 h-6" />
            <span className="power-by-text">Buy Me Coffee</span>
          </a>
      </span>

      <div className="flex gap-x-6 text-sm text-gray-600">
        <div>Gavin Arori</div>
        <div>Frontend Developer</div>
      </div>
    </div>
  );
}
