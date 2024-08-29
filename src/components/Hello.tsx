type Props = {
  title?: string;
};

const Hello = ({ title }: Props) => (
  <div>
    <h1>Hello Component</h1>
    <p>{title}</p>
  </div>
);

export default Hello;
