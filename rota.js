import { useEffect, useState } from "react";
import axios from "axios";

// 🔰 1. Tipagem dos dados
interface MotoTaxista {
  nome: string;
  telefone: string;
  marca_moto: string;
  BI: string;
  email: string;
  matricula: string;
}

// 🔁 2. Componente que busca e exibe os dados
const MotoTaxistaPage = () => {
  const [dados, setDados] = useState<MotoTaxista | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<MotoTaxista>("https://sua-api.com/mototaxista") // 📝 Substitui pela tua URL real
      .then((res) => setDados(res.data))
      .catch((err) => console.error("Erro ao buscar:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Dados do Moto-Taxista</h2>
      {dados ? (
        <ul>
          <li><strong>Nome:</strong> {dados.nome}</li>
          <li><strong>Telefone:</strong> {dados.telefone}</li>
          <li><strong>Marca da Moto:</strong> {dados.marca_moto}</li>
          <li><strong>BI:</strong> {dados.BI}</li>
          <li><strong>Email:</strong> {dados.email}</li>
          <li><strong>Matrícula:</strong> {dados.matricula}</li>
        </ul>
      ) : (
        <p>Dados não encontrados.</p>
      )}
    </div>
  );
};

export default MotoTaxistaPage;
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
import { useEffect, useState } from 'react';
import axios from 'axios';

interface CarBrand {
  codigo: string;
  nome: string;
}

const CarBrands = () => {
  const [brands, setBrands] = useState<CarBrand[]>([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await axios.get<CarBrand[]>('https://parallelum.com.br/fipe/api/v1/carros/marcas');
        setBrands(res.data);
      } catch (err: any) {
        console.error('Erro ao buscar marcas:', err.message);
      }
    };

    fetchBrands();
  }, []);

  return (
    <div>
      <h2>Marcas de Carros</h2>
      <ul>
        {brands.map((brand) => (
          <li key={brand.codigo}> {brand.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarBrands;
