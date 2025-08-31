// components/RippleLink.jsx
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RippleLink({
  href,
  children,
  color = "rgba(193,187,225,0.45)",
  duration = 650,
  ...props
}) {
  const router = useRouter();

  const onClick = (e) => {
    // let new-tab / modified clicks behave normally
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const x = e.clientX || window.innerWidth / 2;
    const y = e.clientY || window.innerHeight / 2;

    // Save payload for the destination page to replay
    sessionStorage.setItem(
      "pending-ripple",
      JSON.stringify({ x, y, color, duration, ts: Date.now() })
    );

    // navigate immediately; the destination will play the ripple on mount
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href} onClick={onClick} {...props}>
      {children}
    </Link>
  );
}
