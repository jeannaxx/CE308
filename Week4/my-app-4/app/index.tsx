import { FlatList, View } from "react-native";
import { useState } from "react";
import { CenteredView } from "./component/CenteredView";
import { ItemCard } from "./component/ItemCard";
import { CustomButton } from "./component/CustomButton";
import { CustomInput } from "./component/CustomInput";

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
  const [showList, setShowList] = useState(true);

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [pcs, setPcs] = useState("");

  return (
    <CenteredView>
      {showList ? (
        <View>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ alignItems: "center", paddingTop: 16 }}
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

          <View style={{ marginTop: 12 }}>
            <CustomButton
              title="ไปหน้าฟอร์ม"
              size="md"
              variant="primary"
              onPress={() => setShowList(false)}
            />
          </View>
        </View>
      ) : (
        <View style={{ width: 300 }}>
          <CustomInput
            label="ชื่อสินค้า"
            value={productName}
            onChangeText={setProductName}
            placeholder="กรอกชื่อสินค้า"
          />
          <CustomInput
            label="ราคา"
            value={price}
            onChangeText={setPrice}
            placeholder="กรอกราคา"
          />
          <CustomInput
            label="จำนวน"
            value={pcs}
            onChangeText={setPcs}
            placeholder="กรอกจำนวน"
          />

          <CustomButton
            title="ยืนยัน"
            size="md"
            variant="primary"
            onPress={() => alert("บันทึกเรียบร้อย")}
          />

          <View style={{ marginTop: 10 }}>
            <CustomButton
              title="กลับหน้า List"
              size="sm"
              variant="secondary"
              onPress={() => setShowList(true)}
            />
          </View>
        </View>
      )}
    </CenteredView>
  );
}
