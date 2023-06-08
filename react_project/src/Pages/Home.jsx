import React from "react";

export default function Home() {
  fetch("/", {
    method: "Get",
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

  return <div>This is Home page</div>;
}
