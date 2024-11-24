import Image from "next/image";



export default async function About() {
await new Promise ((resolve) => {
  setTimeout(resolve, 5000);
})


  return (
    <div>
        <h1>About page</h1>
    </div>
  );
}