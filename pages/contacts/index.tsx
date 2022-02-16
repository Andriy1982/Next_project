import Link from "next/link";
import Head from "next/head";
import Heading from "../../components/Heading";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { contacts: data },
    }
  };

type TProps = {
    contacts: [ 
    {id: number,
    name: string}]
  };

const Contacts: React.FC<TProps> = ({ contacts }: TProps ) => { 
  
    return (
      <>
        <Head>
          <title>Contacts</title>
        </Head>
        <Heading text="Contacts list:" />
        <ul>
          {contacts && contacts.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default Contacts;