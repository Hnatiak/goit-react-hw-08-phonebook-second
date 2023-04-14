export const getContacts = ({ contacts }) => contacts.items;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(({ name }) => {
    const normalizedName = name.toLowerCase();
    return normalizedName.includes(normalizedFilter);
  });
  return result;
};

// export const getFilteredContacts = state => {
//   const { filter, contacts } = state;
//   const normalizedFilter = filter.toLowerCase().trim();

//   return contacts.items.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };