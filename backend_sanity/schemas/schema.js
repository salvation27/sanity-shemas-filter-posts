import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import testimonials from './testimonials'
import skills from './skills'
import abouts from "./abouts";
import header from './header';
// import traveller from './traveller'
import person from './person';
import host from './host';
import categ from './categ';
import shop from './shop';
import cat from './cat';
import review from './review';
import __1 from './__1';
import post from './post';
import author from './author';
import category from './category';
import __2 from './__2';
import post2 from './post2';
import author2 from './author2';
import blockContent from './blockContent';
import category2 from './category2';
// import test from './test';
// import test2 from './test2';

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    header,
    testimonials,
    skills,
    abouts,
    // traveller,
    person,
    host,
    categ,
    shop,
    cat,
    review,
    __1,
    post,
    author,
    category,
    __2,
    post2,
    author2,
    blockContent,
    category2
  ]),
});
