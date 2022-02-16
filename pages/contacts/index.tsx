import Link from "next/link";
import Head from "next/head";

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
        {/* <Heading text="Contacts list:" /> */}
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