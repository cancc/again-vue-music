export function addClass(el, className) {
    // 存在直接return
    if(hasClass(el, className)) {
        return 
    }
    // 添加
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}
// 有class的情况
export function hasClass(el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}


