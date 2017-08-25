//actions可以传值 比如 id index  val 什么的
export function add() {
    return {
        type: 'ADD'
    };
}

export function jian() {
    return {
        type: 'MINUS'
    };
}

export function setXid(id) {
    return {
        type: 'XXX_ID',
        data: id
    };

}
export function chickOnchange(id,index) {
    return {
        type: 'CHICKCHANGE',
        id: id,
        i:index,
    };

}
export function numOnChange(id,val,index) {
    return {
        type: 'NUMCHANGE',
        id: id,
        val:val,
        i:index,
    };

}
