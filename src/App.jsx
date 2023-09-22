import { useState } from "react";
import { Button } from "@ui/button";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center gap-2">
        <Button className="w-52" onClick={() => setCount((count) => count + 1)}>
          Kliknil si me {count}-krat!
        </Button>
      </div>
    </>
  );
}
