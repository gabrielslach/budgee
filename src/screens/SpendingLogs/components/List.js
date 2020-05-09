import React from 'react';
import {View} from 'react-native';
import {ListItem} from 'react-native-elements';

// const spendingLog =
//   {
//     id: int,
//     title: string,
//     note: string,
//     amount: string,
//     type: 'living || leisure || others',
//     icon: 'hotdog || umbrella-beach || seedling',
//     color: '#82b1ff || #ffd180 || #ccff90'
//   };

export default function List(props) {
  const {spendingLog = []} = props;
  return (
    <View>
      {spendingLog.map((item, i) => {
        const item_dep = categorize(item);
        return (
          <ListItem
            key={i}
            title={item_dep.title}
            subtitle={item_dep.note}
            rightTitle={item_dep.amount}
            leftIcon={{
              name: item_dep.icon,
              type: 'font-awesome-5',
              color: item_dep.color,
            }}
            bottomDivider
            onPress={() => console.log('//TODO clicked')}
          />
        );
      })}
    </View>
  );
}

function categorize(item) {
  let item_copy = {...item};
  switch (item_copy.type) {
    case 'Living':
      item_copy.icon = 'hotdog';
      item_copy.color = '#82b1ff';
      break;
    case 'Leisure':
      item_copy.icon = 'umbrella-beach';
      item_copy.color = '#ffd180';
      break;
    case 'Others':
      item_copy.icon = 'seedling';
      item_copy.color = '#ccff90';
      break;
    default:
      item_copy.icon = 'beer';
      item_copy.color = '#f4ff81';
      break;
  }
  item_copy.amount = `₱ ${item.amount || '0.00'}`;
  item_copy.note = `(${item.type}) ${item.note || ''}`;
  return item_copy;
}
