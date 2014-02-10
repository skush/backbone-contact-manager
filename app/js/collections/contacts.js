ContactManager.Collections.Contacts = Backbone.Collection.extend({
	model: ContactManager.Models.Contact
});

/*
//console:

var contacts = new ContactManager.Collections.Contacts([
{
  id: 1,
  name : 'Terrence S. Hatfield',
  tel: '651-603-1723',
  email: 'TerrenceSHatfield@rhyta.com'
},
{
  id: 2,
  name : 'Chris M. Manning',
  tel: '513-307-5859',
  email: 'ChrisMManning@dayrep.com'
},
]);
//contacts.forEach(function(m) {console.log(m.get('name'))})
*/