"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const error = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/service">service</Link>
        </li>
        <li>
          <Link href="/blog">blog</Link>
        </li>
      </ul>
      <br />
      <br />
      <br />
      <h2>page not found</h2>
      <h3>404</h3>

      <button type="button" onClick={handleClick}>
        back to home page
      </button>
    </>
  );
};

export default error;
