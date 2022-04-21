import styles from './styles';
import cars from "./cars";
import {Dimensions, FlatList, Text, View} from "react-native";
import CarItem from "../carItem";

const CarsList = (props) => {

    return (
        <View style = {styles.container}>
            <FlatList
            data={cars}
            renderItem={({item}) => <CarItem car = {item}/>}
            snapToAlignment={"start"}
            decelerationRate={"fast"}
            showsVerticalScrollIndicator={false}
            snapToInterval={Dimensions.get('window').height + 37}
            />
        </View>
    );
};

export default CarsList;