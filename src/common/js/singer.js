// 一个歌手是一个包含歌手name,id,avatar的对象,当id知道的情况下,头像可拼接,
// 这样就会有一个avatar相同的模式,可封装一个函
export default class Singer {
    constructor({id, name}) {
        this.id = id,
        this.name = name
        this.avatar =  `//y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
    }
}


