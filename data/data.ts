import { Menu } from "@/types/types";
export const DATA: Menu[] = [
    {
        title: 'Main courses',
        data: [
            { title: 'Veg Biryani', image: require('../assets/images/veg biryani.jpeg'), price: '500' },
            { title: 'Dal', image: require('../assets/images/dal.jpeg'), price: '150' },
            { title: 'Fried Rice', image: require('../assets/images/fried rice.jpeg'), price: '200' },
        ]
    },
    {
        title: 'Snacks',
        data: [{ title: 'French Fries', image: require('../assets/images/frenchfries.jpeg'), price: "40" }, { title: 'Samosa', image: require('../assets/images/samosa.jpeg'), price: '50' }, { title: 'Puff', price: "56", image: require('../assets/images/puff.jpeg') }],
    },
    {
        title: 'Breakfast',
        data: [{ title: 'Idli', image: require('../assets/images/idli.jpeg'), price: "20" }, { image: require('../assets/images/wada.jpeg'), title: 'wada', price: '40' }, { image: require('../assets/images/puri.jpeg'), title: 'Puri', price: '40' }],
    },
    {
        title: 'Desserts',
        data: [{ image: require('../assets/images/cheesecake.jpeg'), title: 'Cheese Cake', price: "30" }, { title: 'Ice Cream', image: require('../assets/images/icecream.jpeg'), price: "40" }],
    },
    {
        title: 'Beverages',
        data: [{ image: require('../assets/images/lemon tea.jpeg'), title: 'Lemon Tea', price: "20" }, { image: require('../assets/images/tea.jpeg'), title: 'Tea', price: "25" }],
    },
];