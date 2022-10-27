interface Props {
  children: JSX.Element;
}
export const DarkLayout = ({ children }: Props) => {
  return (
    <div
      style={{
        backgroundColor: 'grey',
        padding: '10px',
        borderRadius: '5px',
      }}>
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
