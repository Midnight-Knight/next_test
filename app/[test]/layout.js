export async function generateStaticParams() {
  return [{test: "01-03-04"}];
}

export const dynamicParams = false;

export default function TestLayout({ children }) {
  return (
      <>
        {children}
      </>
  )
}