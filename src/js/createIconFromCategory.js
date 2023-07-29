import { createElement } from './utils/createElement';

export const createIconFromCategory = (category, categoryList) => {
  let icon;
  switch (category) {
    case categoryList[0]:
      icon = createElement('i', {
        class: 'icon fa-solid fa-cart-shopping',
        style: 'color: #ffffff',
      });
      break;
    case categoryList[1]:
      icon = createElement('i', {
        class: 'icon fa-solid fa-head-side-virus',
        style: 'color: #ffffff',
      });
    case categoryList[2]:
      icon = createElement('i', {
        class: 'icon fa-solid fa-lightbulb',
        style: 'color: #ffffff',
      });
      break;
  }
  return createElement(
    'div',
    {
      class:
        'iconWrapper shrink-0 flex justify-center items-center w-10 h-10 rounded-full bg-gray-500',
    },
    icon
  );
};
