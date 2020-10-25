export const getMenuGroupById = (state, menuGroupId) => state.menu.find((menuGroup) => menuGroup.id === menuGroupId);

export const getMenuByGroupId = (state, id) => state.menu.find((menuGroup) => menuGroup.id === id).menuList;

export const getMenuItemDetails = (state, menuGroupId, menuItemId) => getMenuByGroupId(state, menuGroupId).find(
    (menuItem) => menuItem.id === menuItemId,
);

export const getMenuGroup = (state) => state.menu;
