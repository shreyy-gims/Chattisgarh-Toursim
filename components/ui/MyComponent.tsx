// components/ui/MyClientComponent.tsx
"use client";

import { useRouter } from "next/navigation";

export default function MyClientComponent() {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/another-page")}>Go</button>
    </div>
  );
}

