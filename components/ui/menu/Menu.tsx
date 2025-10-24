import { MenuItem as MenuItemType } from "@/types/types";
import { Image, StyleSheet, Text, View } from "react-native";


export const MenuItem = ({ data }: { data: MenuItemType }) => (
    <View style={[styles.item, { backgroundColor: '#f9c2ff' }]}>
        <Image style={[styles.image, { borderRadius: 10 }]} source={data.image} />
        <View style={styles.info}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.price}>${data.price}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 15,
    },
    info: {
        flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: "600",
    },
    price: {
        fontSize: 18,
        color: "#555",
    },
});