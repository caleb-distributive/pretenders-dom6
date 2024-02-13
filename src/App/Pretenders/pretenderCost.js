import {magicCost} from './magicCost';
import {dominionCost} from './dominionCost';

// Total cost of pretender for nation, given requested paths and dominion
export function pretenderCost(pretender, nation, paths, dominion) {

	let pathcost = magicCost({ f: pretender.f, a: pretender.a,
							   w: pretender.w, e: pretender.e,
							   s: pretender.s, d: pretender.d,
							   n: pretender.n, g: pretender.g,
                 b: pretender.b},
		pretender.pathcost, paths);
	let domcost = dominionCost(pretender.startdom, dominion);
	let discount = nation.cheap_gods[pretender.id];
	if ( isNaN(discount) ) { discount = 0;	}
	return( pretender.pointcost + pathcost + domcost - discount);
}



