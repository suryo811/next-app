import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <div className="flex justify-between p-3 bg-gray-900">
      <div>©2025 Lamamia. All rights reserved.</div>
      <div className="flex gap-2">
        <Link
          href="https://facebook.com"
          target="_blank"
          className="relative w-5 h-5 cursor-pointer hover:opacity-80"
        >
          <Image src="/1.png" alt="Facebook" fill />
        </Link>

        <Link
          href="https://instagram.com"
          target="_blank"
          className="relative w-5 h-5 cursor-pointer hover:opacity-80"
        >
          <Image src="/2.png" alt="Instagram" fill />
        </Link>

        <Link
          href="https://twitter.com"
          target="_blank"
          className="relative w-5 h-5 cursor-pointer hover:opacity-80"
        >
          <Image src="/3.png" alt="Twitter" fill />
        </Link>

        <Link
          href="https://youtube.com"
          target="_blank"
          className="relative w-5 h-5 cursor-pointer hover:opacity-80"
        >
          <Image src="/4.png" alt="YouTube" fill />
        </Link>
      </div>
    </div>
  );
}
export default Footer;
