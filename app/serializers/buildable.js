import DS from 'ember-data';

function _convertValue(value) {
  return value === '' ? '-' : value;
}

function _getExpansion(expansion) {
  expansion = expansion.toLowerCase();
  if(expansion === 'rog') {
    return 'Reign of Giants';
  } else if(expansion === 'dst') {
    return "Don't Starve Together";
  } else if(expansion === 'sw') {
    return 'Shipwrecked';
  } else if(expansion === '') {
    return 'n/a';
  }
  console.log('Unknown expansion: ' + expansion);
  return 'Unknown: ' + expansion;
}

function _getPeriod(period) {
  period = period.toLowerCase();
  if(period === '00 early') {
    return 0;
  } else if(period === '01 mid') {
    return 1;
  } else if(period === '02 late') {
    return 2;
  } else if(period === '03 very late') {
    return 3;
  } else if(period === '99 special') {
    return -1;
  }
  console.log('Unknown period: ' + period);
  return 0;
}

function _serializeItem(item) {
  return {
    'id': item['Name'].toLowerCase(),
    'type': 'buildable',
    'attributes': {
      'expansion': _getExpansion(item['Exp']),
      'period': _getPeriod(item['Period']),
      'name': item['Name'].toLowerCase(),
      'type': item['Type'].toLowerCase(),
      'components': item['Components'].toLowerCase().split(/,[ ]*/).map(function(component) {
        var [quantity, this_component] = component.split(' x ');
        return {
          'quantity': quantity,
          'item': this_component,
        };
      }),
      'tab': item['Tab'],
      'health': _convertValue(item['Health']),
      'hunger': _convertValue(item['Hunger']),
      'sanity': _convertValue(item['Sanity']),
      'damage': _convertValue(item['Damage']),
      'durability': item['Durability'],
      'notes': item['Notes/effect'],
    },
  };
}

export default DS.Serializer.extend({
  /* jshint unused:false */
  normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle) {
    if(requestType === 'findAll') {
      return {
        data: payload.map(function(item) {
          return _serializeItem(item);
        })
      };
    } else if(requestType === 'findRecord') {
      return {
        data: _serializeItem(payload),
      };
    } else {
      console.log("Unknown request type: " + requestType);
      return null;
    }
  },
});
