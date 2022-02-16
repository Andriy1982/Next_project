

type TProps = {
    tag?: React.FunctionComponent<any> | 'h2',
    text: string,
  };


const Heading: React.FC<TProps> = ({ tag, text }: TProps) => {
    const Tag = tag || 'h1';
    return <Tag>{text}</Tag>
  }
  
  export default Heading;