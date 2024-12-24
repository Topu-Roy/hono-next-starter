"use client";

import { count } from "@/signals/home";
import { Button } from "@/components/ui/button";

export function Counter() {
  return (
    <div>
      <>
        <p>Count: {count}</p>
      </>
      <Button onClick={() => count.value++}>Increment</Button>
    </div>
  );
}

export function Counter2() {
  return (
    <div>
      <p>Value: {count}</p>
      <Button>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, expedita?</Button>
      <p>hello0</p>
    </div>
  );
}
