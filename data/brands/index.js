// One data object per partner brand. Each migrated from its original <brand>.html.
import abb from './abb';
import axelon from './axelon';
import connectwell from './connectwell';
import gic from './gic';
import hicool from './hicool';
import hummel from './hummel';
import klauke from './klauke';
import mitsubishi from './mitsubishi';
import novotecnik from './novotecnik';
import nvent from './nvent';
import schmersal from './schmersal';
import unison from './unison';

export const brands = {
  abb,
  axelon,
  connectwell,
  gic,
  hicool,
  hummel,
  klauke,
  mitsubishi,
  novotecnik,
  nvent,
  schmersal,
  unison,
};

export const brandSlugs = Object.keys(brands);
