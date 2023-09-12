"use client";
import styled from "styled-components";

const PriceText = styled.span<PropsPriceText>`
  font-size: ${(props) =>
    props.size === "small"
      ? "14px"
      : props.size === "medium"
      ? "16px"
      : props.size === "large"
      ? "20px"
      : "inherit"};
  font-style: normal;
  font-weight: ${(props) => props.weight};
  line-height: 150%;
  display: block;
  color: ${(props) => props.theme.palette?.common?.black};
`;
interface PropsPriceText {
  size?: "small" | "medium" | "large";
  weight?: "400" | "600" | "800";
}

interface PropsPrice extends PropsPriceText {
  value: number;
}

const Price: React.FC<PropsPrice> = ({
  value,
  size = "medium",
  weight = "600",
}) => {
  function formatarCentavosParaReal(centavos: number) {
    const valorEmReais = centavos / 100;
    return valorEmReais.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return (
    <PriceText size={size} weight={weight}>
      {formatarCentavosParaReal(value)}
    </PriceText>
  );
};

export default Price;
