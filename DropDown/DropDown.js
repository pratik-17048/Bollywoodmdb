// import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
// import React from 'react';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import {useTheme} from '@react-navigation/native';

// export default function DropDown({
//   fruits = [],
//   value = {},
//   onSelect = () => {},
//   defaultTitle,
// }) {
//   const {colors} = useTheme();
//   const [showOptions, setShowOption] = React.useState(false);

//   const onSelectedItem = val => {
//     setShowOption(false);
//     onSelect(val);
//   };
//   return (
//     <View>
//       <TouchableOpacity
//         style={styles.dropDownStyle}
//         activeOpacity={0.8}
//         onPress={() => setShowOption(!showOptions)}>
//         <Text>{`${defaultTitle}`}</Text>

//         <Image
//           source={require('../Assets/downarrow.png')}
//           style={{
//             tintColor: 'white',
//             height: 20,
//             width: 20,
//             transform: [{rotate: showOptions ? '180deg' : '0deg'}],
//           }}
//         />
//       </TouchableOpacity>
//       {showOptions && (
//         <View
//           style={{
//             backgroundColor: 'black',
//             padding: 5,
//             borderWidth: 1,
//             borderColor: '282828',
//             borderRadius: 5,
//             position: 'relative',
//           }}>
//           {fruits.map((val, i) => {
//             return (
//               <TouchableOpacity
//                 onPress={() => onSelectedItem(val)}
//                 style={{
//                   paddingVertical: 2,
//                   borderRadius: 4,
//                   paddingHorizontal: 6,
//                 }}
//                 key={String(i)}>
//                 <Text>{val.name}</Text>
//               </TouchableOpacity>
//             );
//           })}
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   dropDownStyle: {
//     justifyContent: 'center',
//     flexDirection: 'row',
    
//   },
// });




import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useTheme} from '@react-navigation/native';
export default function DropDown({
  fruits = [],
  value = {},
  onSelect = () => {},
  defaultTitle
}) {
  const { colors} = useTheme()
  const [showOptions, setShowOption] = React.useState(false);

  const onSelectedItem = val => {
    setShowOption(false);
    onSelect(val);
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.dropDownStyle}
        activeOpacity={0.8}
        onPress={() => setShowOption(!showOptions)}>
        <Text>{`${defaultTitle}`}</Text>
      {/* !!value ? value?.name :  */}
        <Image
          source={require('../Assets/downarrow.png')}
          style={{
            tintColor:colors.text,
            height: 20,
            width: 20,
            transform: [{rotate: showOptions ? '180deg' : '0deg'}],
          }}
        />
      </TouchableOpacity>
      {showOptions && (
        <View
          style={{
            backgroundColor: colors.background,
            padding: 5,
            borderWidth:1,
            borderColor:'#282828',
            padding:5,
            borderRadius: 5,
            position: 'relative',
          }}>
          {fruits.map((val, i) => {
            return (
              <TouchableOpacity
                onPress={() => onSelectedItem(val)}
                style={{
                  //   backgroundColor: value.id == val.id ? 'pink':'white',
                  paddingVertical: 2,
                  borderRadius: 4,
                  paddingHorizontal: 6,
                }}
                key={String(i)}>
                <Text>{val.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dropDownStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

  },
});

