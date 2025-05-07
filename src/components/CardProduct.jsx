export const CardProduct = ({
  id,
  name,
  price,
  image,
  description,
  category,
}) => {
  return (
    <article className="card-product border rounded-lg border-neutral-400 bg-neutral-200">
      <div className="image">
        <figure className="aspect-square overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt={`Imagen producto de ${name}`}
          />
        </figure>
      </div>
      <div className="p-3">
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </article>
  );
};
