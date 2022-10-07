
/**
 * 
 * @class
 * @classdesc
 * @author Elizandro Dantas
 * 
 * @see GitHub {@link https://github.com/elizandrodantas}
 */

export function Analise(){
    this.rule = [1,14,2,13,3,12,4,0,11,5,10,6,9,7,8];
}

/**
 * 
 * @typedef {object} IResponseLastAnalise
 * @property { "error" | "success" } status
 * @property { import("./blaze.mjs").IDataBlazeResponse } last
 * @property { boolean } verify
 * @property { import("./blaze.mjs").IDataBlazeResponse[] } recents
 */

/**
 * 
 * @method last
 * @memberof Analise
 * @instance
 * @param {import("./blaze.mjs").IResponseRecents} recents 
 * @returns {IResponseLastAnalise}
 * @api public
 */

Analise.prototype.last = function(recents){
    let { status, response } = recents;

    if(!status) return { status: 'error', message: 'error' }

    let lastNeed = response.slice(0, 16), lastAccept = lastNeed[lastNeed.length - 1];

    return {
        status: 'success',
        last: lastAccept,
        recents: response,
        verify: this.verify(lastAccept)
    }
}

/**
 * 
 * @param {import("./blaze.mjs").IDataBlazeResponse} last 
 * @returns {boolean}
 */

Analise.prototype.verify = function(last){
    let { roll } = last;

    return this.rule.includes(roll);
}