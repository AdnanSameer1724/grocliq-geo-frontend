export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/geo/page',
      permanent: false,
    },
  };
}

export default function Home() {
  return null;
}
