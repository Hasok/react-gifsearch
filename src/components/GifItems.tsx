interface GifItemsProps {
  title: string;
  url: string;
  id: string;
}

export const GifItems = ({ title, url, id }: GifItemsProps) => {
  return (
    <div className="card">
      <img src={url} alt={id} />
      <p>{title}</p>
    </div>
  );
};
