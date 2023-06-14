import Typewriter from "typewriter-effect";
import React from "react";

export default function Home() {
  return (
    <div className="border w-full flex justify-center items-center h-[600px]">
      <div>
        <span className="text-2xl">
          <Typewriter
            options={{
              strings: ["Welcome ! this is an interview test app"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
    </div>
  );
}
