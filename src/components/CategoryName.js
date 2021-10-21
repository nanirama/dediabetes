import React from 'react';
import catinfos from '../data/categories.json';

export default function CategoryName({ category }) {
  console.log(category)
  let catinfo = catinfos.filter(catinfo => catinfo.slug === `${category}`);

  catinfo = catinfo[0] ? catinfo[0] : {};

  let catLabel;
  if (catinfo.label) catLabel = catinfo.label;
  else catLabel = 'Dediabetes';

  return <span>{catLabel}</span>;
}
