import Link from 'next/link';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
];
function Navbar() {
  return (
    <div className="bg-gray-900 text-white text-lg flex justify-between p-3">
      <Link href="/" className="hover:text-gray-300 transition-colors">
        lamamia
      </Link>
      <div className="flex gap-4">
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="hover:text-gray-300 transition-colors">
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Navbar;
