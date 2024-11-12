// frontend/components/FetchData.js
import { useEffect, useState } from "react";

export default function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/data')
      .then((response) => response.json())
      .then((result) => setData(result.data));
  }, []);

  return <div>{data ? data : "Chargement des données..."}</div>;
}