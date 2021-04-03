function getTeste(id){
    return `select id, name from articles where id = ${id}`
}

module.exports = {
    getTeste
}