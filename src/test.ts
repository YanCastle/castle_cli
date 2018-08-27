import gogs from './lib/git';
gogs.createRepository('abctest', 'describe').then((e) => {
    // gogs.listRepositories().then(d => {
    //     console.log(JSON.stringify(d[0]))
    // })
    // gogs.createHook('abctest', 'http://www.tansuyun.cn/')
}).catch((e) => {
    console.error(e)
})