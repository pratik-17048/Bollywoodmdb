import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cell,
} from 'react-native-table-component';
import CustomHeader from '../Header/CustomHeader';
import {useTheme} from '@react-navigation/native';

tableHead = ['Year', 'Movie name', 'Star Cast', 'Producer', 'Director'];
tableData = [
  [
    '2022',
    'Suryavanshi',
    'Akshay Kumar Katrina Kaif',
    'Boney Kapoor',
    'Rohit Shetty',
  ],
  [
    '2022',
    'Suryavanshi',
    'Akshay Kumar Katrina Kaif',
    'Boney Kapoor',
    'Rohit Shetty',
  ],
  [
    '2022',
    'Suryavanshi',
    'Akshay Kumar Katrina Kaif',
    'Boney Kapoor',
    'Rohit Shetty',
  ],
  [
    '2022',
    'Suryavanshi',
    'Akshay Kumar Katrina Kaif',
    'Boney Kapoor',
    'Rohit Shetty',
  ],
  [
    '2022',
    'Suryavanshi',
    'Akshay Kumar Katrina Kaif',
    'Boney Kapoor',
    'Rohit Shetty',
  ],
];
const Banner = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View>
      <CustomHeader
        isHome={false}
        title="Filmography"
        navigation={navigation}></CustomHeader>
      <ScrollView style={{marginHorizontal: 12, marginVertical: 10}}>
        <View>
          <Text style={[styles.headlineText,colors.text]}>DVV Entertainment</Text>
          <Text style={[styles.headline2,colors.text]}>About DVV Entertainment</Text>
          <View style={styles.textContainer}>
            <Text style={{color:colors.text}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
          </View>
        </View>

        <Text
          style={{fontWeight: '500', marginVertical: 10, color: colors.text}}>
          Filmography
        </Text>
        <View style={styles.container}>
          <Table borderStyle={{borderColor: 'transparent'}}>
            <Row
              data={tableHead}
              flexArr={[1, 1, 1, 1, 1]}
              style={styles.head}
              textStyle={styles.text}
            />
            <TableWrapper style={styles.wrapper}>
              {/* <Col data={tableHead} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/> */}
              <Rows
                data={tableData}
                flexArr={[1, 1, 1, 1, 1]}
                style={styles.row}
                textStyle={styles.text}
              />
            </TableWrapper>
          </Table>
        </View>

        <Text
          style={{
            fontWeight: '500',
            marginVertical: 10,
            textTransform: 'uppercase',
            color: colors.text,
          }}>
          Zee Studios complete movies list from 2022 to 2016
        </Text>
        <View style={[styles.container, {marginBottom: 60}]}>
          <Table borderStyle={{borderColor: 'transparent'}}>
            <Row
              data={tableHead}
              flexArr={[1, 1, 1, 1, 1]}
              style={styles.head}
            />
            <TableWrapper style={styles.wrapper}>
              {/* <Col data={tableHead} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/> */}
              <Rows
                data={tableData}
                flexArr={[1, 1, 1, 1, 1]}
                style={styles.row}
                textStyle={styles.text}
              />
            </TableWrapper>
          </Table>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headlineText: {fontWeight: '500', fontSize: 18,},
  headline2: {fontSize: 15, fontWeight: '500'},
  textContainer: {marginVertical: 10},
  container: {flex: 1, padding: 5, paddingTop: 15},
  head: {height: 40, borderBottomWidth: 2, borderColor: '#282828'},
  textHead: {fontWeight: '600', color: 'red'},
  text: {margin: 2, fontSize: 11, fontWeight: '600'},
  wrapper: {flexDirection: 'row'},
  row: {
    flexDirection: 'row',
    margin: 3,
    padding: 4,
    borderBottomWidth: 1,
    borderColor: '#282828',
  },
});

export default Banner;
