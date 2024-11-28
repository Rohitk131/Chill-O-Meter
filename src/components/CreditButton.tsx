import { useEffect, useRef, useState } from 'react';
import { Github } from 'lucide-react';
import Link from 'next/link';

interface MousePosition {
  x: string;
  y: string;
}

const BorderGlowButton = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: '-100%', y: '-100%' });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x: `${x}px`, y: `${y}px` });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Link href={'https://github.com/Rohitk131'}>
      <button
        className="relative overflow-hidden rounded-full transform transition-transform ease-in-out active:scale-90"
        ref={ref}
      >
        <span
          className={`absolute z-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(#fb3b53_0%,transparent_70%)]`}
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        />
        <div className="relative z-20 m-[1px] rounded-full gap-2 bg-black/70 px-4 py-1 text-sm text-[#fb3b53] backdrop-blur-sm flex flex-row justify-center items-center">
          <Github size={20} />
          Created by @Rohitk131
        </div>
      </button>
    </Link>
  );
};

export default BorderGlowButton;