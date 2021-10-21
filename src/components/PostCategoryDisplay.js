import { Link } from 'gatsby';
import React from 'react';
import catinfos from '../data/categories.json';

export default function PostCategoryDisplay({ category }) {

  let catinfo = catinfos.filter(catinfo => catinfo.slug === `${category}`);

  catinfo = catinfo[0] ? catinfo[0] : {};

  let catLabel;
  if (catinfo.label) catLabel = catinfo.label;
  else catLabel = 'Dediabetes';

  return (
    <Link
      to={`/diabetes/${category}/`}
      className="border border-themeBrandColor rounded hover:bg-themeBrandColor text-themeBrandColor hover:text-white px-2 mr-3 whitespace-nowrap"
      style={{ whiteSpace: 'nowrap' }}
    >
      {catLabel}
    </Link>
  );
}
