export const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/products");
    if (!res.ok) {
      throw new Error("Error con la url ", err);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("error al obtener los productos: ", err);
    return [];
  }
};
