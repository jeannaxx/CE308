import { FlatList } from "react-native";
import { CenteredView } from "./component/CenteredView";
import { ItemCard } from "./component/ItemCard";

type Item = {
  id: string;
  productName: string;
  price: number;
  pcs: number;
  btnSize: "sm" | "md" | "lg";
  btnColor: "primary" | "secondary" | "danger";
};

const items: Item[] = [
  {
    id: "1",
    productName: "Banana",
    price: 2000,
    pcs: 10,
    btnSize: "sm",
    btnColor: "primary",
  },
  {
    id: "2",
    productName: "Mango",
    price: 2000,
    pcs: 10,
    btnSize: "md",
    btnColor: "secondary",
  },
  {
    id: "3",
    productName: "Apple",
    price: 2000,
    pcs: 10,
    btnSize: "lg",
    btnColor: "danger",
  },
];

export default function Index() {
  return (
    <CenteredView>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemCard
            productName={item.productName}
            price={item.price}
            pcs={item.pcs}
            btnSize={item.btnSize}
            btnColor={item.btnColor}
          />
        )}
      />
    </CenteredView>
  );
}
