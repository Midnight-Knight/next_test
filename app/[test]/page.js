export const revalidate = 60;
export default async function TestPage()
{
  const data = await fetch("http://localhost:2999/get");
  const date = await data.json();

  return (
      <div>
        <h1>{date.date}</h1>
      </div>
  )
}