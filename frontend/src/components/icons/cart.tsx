import styled from "styled-components";
import ShoppingBagIcon from "./shopping-bag";

const Quantity = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: -0.5rem;
  margin-right: -0.5rem;
  display: flex;
  height: 1.25rem;
  width: 1.25rem;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 50%;
  background-color: red;
  font-size: 0.75rem;
  color: white;
`;

const ContainerCart = styled.div`
  position: relative;
`;
export default function CartIcon({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <ContainerCart>
      <ShoppingBagIcon />
      {quantity ? <Quantity>{quantity}</Quantity> : null}
    </ContainerCart>
  );
}
