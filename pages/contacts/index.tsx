import { FC } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import Heading from "../../components/Heading";
import { contactType } from "../../types";

type contactsTypeProps = {
  contacts: [contactType],
}

export const getStaticProps: GetStaticProps = async () => {
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

const Contacts: FC<contactsTypeProps > = ({ contacts } ) => { 
  
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